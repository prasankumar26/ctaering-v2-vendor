import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { useEffect, useRef, useState } from 'react';
import LoaderSpinner from '../LoaderSpinner';
import { api, BASE_URL } from '../../api/apiConfig';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { DATA_VALIDATION_ERROR, datavalidationerror, successToast } from '../../utils';


const CssTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: '2px solid #F0F1F3',
            borderRadius: '99px'
        },
        '&:hover fieldset': {
            border: '2px solid #F0F1F3',
        },
        '&.Mui-focused fieldset': {
            border: '2px solid #c33332',
        },
    },
    '& input': {
        border: 'none',
        fontSize: '16px',
        padding: '10px 20px',
    },
}));

const initialState = {
    street_name: '',
    area: '',
    pincode: '',
    latitude: '',
    longitude: '',
    address: '',
    city: '',
    state: '',
    country: '',
    formatted_address: '',
}

const EnterLocationManually = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };

    const [locationValues, setLocationValues] = useState(initialState)
    const [locationPlaceId, setLocationPlaceId] = useState(null)
    const [manualLocation, setManualLocation] = useState("")
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [loading, setLoading] = useState(false)
    const { accessToken } = useSelector((state) => state.user.accessToken)
    const inputElement = useRef();

    useEffect(() => {
        inputElement.current.focus()
    }, [])


    const {
        placesService,
        placePredictions,
        getPlacePredictions,
        isPlacePredictionsLoading,
    } = usePlacesService({
        apiKey: process.env.REACT_APP_GOOGLE,
    });

    useEffect(() => {
        if (placePredictions.length)
            placesService?.getDetails(
                {
                    placeId: locationPlaceId,
                },
                (placeDetails) => savePlaceDetailsToState(placeDetails)
            );
    }, [placePredictions, locationPlaceId]);


    const savePlaceDetailsToState = (places) => {
        const { formatted_address, name } = places;
        const { address_components } = places;

        const country = address_components?.find(c => c?.types?.includes('country')) || {};
        const state = address_components?.find(c => c?.types?.includes('administrative_area_level_1')) || {};
        const city = address_components?.find(c => c?.types?.includes('administrative_area_level_3')) || {};
        const pincode = address_components?.find(c => c?.types?.includes('postal_code')) || {};
        const area = address_components?.find(c => c?.types?.includes('locality')) || {};
        const street_name = address_components?.find(c => c?.types?.includes('locality')) || {};

        const { geometry: { location } } = places;
        const { lat, lng } = location;

        setLocationValues({
            ...locationValues,
            street_name: street_name,
            area: area,
            pincode: pincode?.long_name,
            latitude: lat(),
            longitude: lng(),
            address: name,
            city: city,
            state: state,
            country: country,
            formatted_address: formatted_address,
        })
    }

    const selectLocation = (item) => {
        setSelectedLocation(item);
        setManualLocation(item.description);
        setLocationPlaceId(item?.place_id)
    }

    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;

                    const geocoder = new window.google.maps.Geocoder();
                    const latlng = new window.google.maps.LatLng(latitude, longitude);



                    geocoder.geocode({ location: latlng }, (results, status) => {
                        console.log(latlng, "latlng");
                        console.log(results, "results");
                        console.log(status, "status");

                        // if (status === "OK") {
                        //   if (results[0]) {
                        //     const place = results[0];
                        //     console.log(place, "place");
                        //     savePlaceDetailsToState(place);
                        //   } else {
                        //     console.error("No results found");
                        //   }
                        // } else {
                        //   console.error("Geocoder failed due to: " + status);
                        // }
                    });

                },
                (error) => {
                    console.error("Error getting current location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            street_name: locationValues?.street_name?.long_name || "",
            area: locationValues?.area?.long_name || "",
            pincode: locationValues?.pincode || "",
            latitude: locationValues?.latitude || "",
            longitude: locationValues?.longitude || "",
            address: locationValues?.address || "",
            city: locationValues?.city?.long_name || "",
            state: locationValues?.state?.long_name || "",
            country: locationValues?.country?.long_name || "",
            formatted_address: locationValues?.formatted_address || "",
            place_id: locationPlaceId || ''
        }
        setLoading(true)
        try {
            const response = await api.post(`${BASE_URL}/update-vendor-location`, data, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            toast.success(successToast(response))
            navigate('/profile-steps')
        } catch (error) {
            console.log(error, "error");
            toast.error(datavalidationerror(error))
        } finally {
            setLoading(false)
        }

    }

    return (
        <>
            <Container maxWidth="lg">
                <div className='mt-3 bg-primary'>
                    <h1 className='ct-heading'>caterings Service</h1>
                </div>
                <Grid container spacing={2} className='box-negative'>
                    <Grid item xs={12} sm={6.5} md={4.5} lg={4.5}>
                        <form onSubmit={handleSubmit}>
                            <div className="ct-box ct-box-padding">
                                <div className="px-4">
                                    <h4 className='ct-box-loc-title'>Enter your area or address</h4>

                                    <CssTextField
                                        inputRef={inputElement}
                                        required
                                        onChange={(evt) => {
                                            setSelectedLocation(null);
                                            setManualLocation(evt.target.value);
                                            getPlacePredictions({ input: evt.target.value });
                                        }}
                                        value={manualLocation}
                                        loading={isPlacePredictionsLoading}
                                        id="outlined-number"
                                        variant="outlined"
                                        label="Try A2B, Mg road, Bangalore, etc."
                                        className='mt-3 mb-2'
                                        style={{ width: '100%' }}
                                        InputLabelProps={{
                                            style: { color: '#777777', fontSize: '12px' },
                                        }}
                                        InputProps={{
                                            style: {
                                                borderRadius: '8px',
                                                backgroundColor: '#FFFFFF',
                                            },
                                            endAdornment: (
                                                <InputAdornment position="end" style={{ color: '#00000' }}>
                                                    <SearchIcon style={{ fontSize: '16px' }} />
                                                </InputAdornment>
                                            )
                                        }}
                                    />

                                    <Button variant="contained" className='ct-box-btn-current-loc' onClick={getCurrentLocation}>Use my current location</Button>

                                    <div className='mb-3' style={{ marginTop: '20px', borderTop: '2px solid #c33332' }}>
                                        <Divider />
                                    </div>

                                   {placePredictions.length > 0 && <p className='ct-box-search-loc mb-1'>Search Results</p>} 

                                    {isPlacePredictionsLoading ? (
                                        <LoaderSpinner />
                                    ) : (
                                        selectedLocation ? (
                                                <h2 className='ct-box-search-results' onClick={() => setSelectedLocation(null)}>{selectedLocation.description}</h2>
                                        ) : (
                                            placePredictions?.map((item, index) => (
                                                    <h2 className='ct-box-search-results' key={index} onClick={() => selectLocation(item)}>{item?.description}</h2>
                                            ))
                                        )
                                    )}

                                    <Stack direction="column" className='mt-5'>
                                        <Button type='submit' variant="contained" className='ct-box-btn-catering' disabled={loading}> {loading ? 'Loading...' : 'Next'}</Button>
                                    </Stack>



                                    <KeyboardArrowLeftIcon style={{ color: '#57636c', marginTop: '30px', cursor: 'pointer' }} onClick={handleBack} />
                                </div>
                            </div>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default EnterLocationManually