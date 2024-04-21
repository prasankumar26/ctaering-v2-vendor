import React, { useEffect, useState } from 'react'
import TopHeader from '../components/global/TopHeader'
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { api, BASE_URL } from '../api/apiConfig';
import { useSelector } from 'react-redux';


const CssTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: '2px solid #F0F1F3',
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

const CssTextFieldSmall = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: '2px solid #F0F1F3',
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
        padding: '6px 20px',
    },
    '& input::placeholder': {
        fontSize: '10px', // Adjust the font size here
    },
}));

const Packages = () => {
    const { accessToken } = useSelector((state) => state.user.accessToken)
    const [foodTypes, setFoodTypes] = useState([{ "id": 1, "name": "Veg", "selected": 0 }, { "id": 2, "name": "Non Veg", "selected": 0 }])
    const [serviceTypes, setServiceTypes] = useState([
        { "id": 1, "name": "Delivery", "selected": 0 },
        { "id": 2, "name": "Takeaway", "selected": 0 }
    ])
    const [servingTypes, setServingTypes] = useState(
        [{ "id": 1, "name": "Table-service", "selected": 0 },
        { "id": 2, "name": "Buffet-Service", "selected": 0 }]
    )
    const [maximumCapacity, setMaximumCapacity] = useState("")
    const [minimumCapacity, setMinimumCapacity] = useState("")
    const [startPrice, setStartPrice] = useState("")

    const handleFoodSwitchToggle = (index) => {
        const updatedFoodTypes = foodTypes.map((food, i) =>
            i === index ? { ...food, selected: food.selected ? 0 : 1 } : food
        );
        setFoodTypes(updatedFoodTypes);
    };

    const handleSwitchToggle = (index) => {
        const updatedServiceTypes = serviceTypes.map((service, i) =>
            i === index ? { ...service, selected: service.selected ? 0 : 1 } : service
        );
        setServiceTypes(updatedServiceTypes);
    };

    const handleServingSwitchToggle = (index) => {
        const updateServingTypes = servingTypes.map((serving, i) =>
            i === index ? { ...serving, selected: serving.selected ? 0 : 1 } : serving
        )
        setServingTypes(updateServingTypes);
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        console.log(foodTypes, "foodTypes");
        console.log(serviceTypes, "serviceTypes");
    }


    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const response = await api.get(`${BASE_URL}/get-vendor-package-details`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }
                });

                const { foodTypes, maximum_capacity, minimum_capacity, serviceTypes, servingTypes } = response?.data?.data;
                console.log(response?.data?.data, "response?.data?.data");
                // setServiceTypes(serviceTypes)
                // setServingTypes(servingTypes)
                // setFoodTypes(foodTypes)
                // setMaximumCapacity(maximum_capacity)
                // setMinimumCapacity(minimum_capacity)
            } catch (error) {
                console.log(error);
            }
        }

        fetchPackages();
    }, [])


    return (
        <>
            <TopHeader title="Manage Your Package" description="Add your Package below" />

            <Container maxWidth="lg">
                <form onSubmit={onHandleSubmit}>
                    <div className='card-box-shadow px-5 pt-2 pb-4 mb-4'>
                        <Grid container spacing={2} className='mt-0'>
                            <Grid item xs={12} lg={6}>
                                <h3 className='package-capacity mt-0'>Choose your food type Below</h3>
                                <p className='max-min-capacity-para text-center mb-3'>If you provide both Veg and Non-Veg, please check both checkboxes.</p>

                                {foodTypes.map((food, index) => (
                                    <Stack key={food.id} direction="row" alignItems="center" justifyContent="center" spacing={2} className={food.selected ? 'mb-5 green-switch' : 'mb-5'}>
                                        <h4 className={food.name === 'Veg' ? 'package-vn-title-veg' : 'package-vn-title-nonveg'}>{food.name}</h4>
                                        <Switch
                                            size='small'
                                            checked={food.selected === 1}
                                            onChange={() => handleFoodSwitchToggle(index)}
                                            sx={{
                                                "&.MuiSwitch-root .MuiSwitch-switchBase": {
                                                    color: food.name === 'Veg' ? "#459412" : "#7c1e1e"
                                                },
                                                "&.MuiSwitch-root .Mui-checked": {
                                                    color: food.name === 'Non Veg' ? "#7c1e1e" : "#459412",
                                                }
                                            }}
                                        />
                                    </Stack>
                                ))}
                            </Grid>


                            <Grid item xs={12} lg={6}>
                                <h3 className='package-capacity mt-0'>Starting Price / Plate</h3>
                                <p className='max-min-capacity-para-green text-center mt-3'>Enter veg Starting price / plate</p>
                                <Stack direction="row" justifyContent="end">
                                    <CssTextFieldSmall
                                        value={startPrice}
                                        onChange={(e) => setStartPrice(e.target.value)}
                                        id="outlined-number"
                                        variant="outlined"
                                        placeholder="Enter Minimum Capacity - Eg: 100plates"
                                        className='mt-1'
                                        style={{ width: '75%' }}
                                        InputLabelProps={{
                                            style: { color: '#777777', fontSize: '10px' },
                                        }}
                                        InputProps={{
                                            style: {
                                                borderRadius: '8px',
                                                backgroundColor: '#FFFFFF',
                                            }
                                        }}
                                    />
                                </Stack>

                                <p className='max-min-capacity-para-red text-center mt-3'>Enter Non veg Starting price / plate</p>
                                <Stack direction="row" justifyContent="end">
                                    <CssTextFieldSmall
                                        id="outlined-number"
                                        variant="outlined"
                                        placeholder="Enter Minimum Capacity - Eg: 100plates"
                                        className='mt-1'
                                        style={{ width: '75%' }}
                                        InputLabelProps={{
                                            style: { color: '#777777', fontSize: '10px' },
                                        }}
                                        InputProps={{
                                            style: {
                                                borderRadius: '8px',
                                                backgroundColor: '#FFFFFF',
                                            }
                                        }}
                                    />
                                </Stack>

                            </Grid>
                        </Grid>


                        <Divider
                            className='mt-4'
                            variant="middle"
                            style={{
                                backgroundColor: '#c33332',
                                margin: '0px'
                            }}
                        />

                        <Grid container spacing={2} className='mt-2'>
                            <Grid item xs={12} lg={6}>
                                <h3 className='package-capacity mt-3'>Choose your Service type Below</h3>
                                <p className='max-min-capacity-para text-center'>If you provide both table and buffet service, please check both</p>
                                {serviceTypes.map((service, index) => (
                                    <Stack key={service.id} direction="row" justifyContent="center" alignItems="center" spacing="2" className='mt-3'>
                                        <img src={`/img/icons/${service.name.toLowerCase()}.png`} alt="" className='package-icons' />
                                        <p className='px-3 package-icon-title'>{service.name}</p>
                                        <Switch
                                            size="small"
                                            checked={service.selected === 1}
                                            onChange={() => handleSwitchToggle(index)}
                                        />
                                    </Stack>
                                ))}
                            </Grid>

                            <Grid item xs={12} lg={6}>
                                <h3 className='package-capacity mt-3'>Choose your Serving type Below</h3>
                                <p className='max-min-capacity-para text-center'>If you provide both table and buffet service, please check both</p>
                                {
                                    servingTypes.map((servingType, index) => (
                                        <Stack direction="row" justifyContent="center" alignItems="center" spacing="2" className='mt-3' key={index}>
                                            <img src={`/img/icons/${servingType.name}.png`} alt="" className='package-icons' />
                                            <p className='px-3 package-icon-title'>{servingType.name}</p>
                                            <Switch size="small" checked={servingType.selected === 1} onChange={() => handleServingSwitchToggle(index)} />
                                        </Stack>
                                    ))
                                }
                            </Grid>
                        </Grid>


                        <Divider
                            className='mt-4'
                            variant="middle"
                            style={{
                                backgroundColor: '#c33332',
                                margin: '0px'
                            }}
                        />

                        <h3 className='package-capacity mt-3'>Capacity</h3>

                        <Grid container spacing={2} className='mt-2'>
                            <Grid item xs={12} lg={6}>
                                <p className='max-min-capacity mb-2'>Minimum Capacity</p>
                                <CssTextField
                                    value={minimumCapacity}
                                    onChange={(e) => setMinimumCapacity(e.target.value)}
                                    type='number'
                                    id="outlined-number"
                                    variant="outlined"
                                    placeholder="Enter Minimum Capacity - Eg: 100plates"
                                    className='mt-0'
                                    style={{ width: '100%' }}
                                    InputLabelProps={{
                                        style: { color: '#777777', fontSize: '10px' },
                                    }}
                                    InputProps={{
                                        style: {
                                            borderRadius: '8px',
                                            backgroundColor: '#FFFFFF',
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <p className='max-min-capacity mb-2'>Maximum Capacity</p>
                                <CssTextField
                                    value={maximumCapacity}
                                    onChange={(e) => setMaximumCapacity(e.target.value)}
                                    type='number'
                                    id="outlined-number"
                                    variant="outlined"
                                    placeholder="Enter Maximum Capacity - Eg: 7000plates"
                                    className='mt-0'
                                    style={{ width: '100%' }}
                                    InputLabelProps={{
                                        style: { color: '#777777', fontSize: '10px' },
                                    }}
                                    InputProps={{
                                        style: {
                                            borderRadius: '8px',
                                            backgroundColor: '#FFFFFF',
                                        }
                                    }}
                                />
                            </Grid>
                        </Grid>

                        <Stack direction="row" justifyContent="center" className="mt-4">
                            <Button variant="contained" className="inquiries-red-btn" type="submit"> Update </Button>
                        </Stack>
                    </div>
                </form>
            </Container>
        </>
    )
}

export default Packages