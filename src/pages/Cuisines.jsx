import React, { useState } from 'react'
import TopHeader from '../components/global/TopHeader'
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import EditIcon from '@mui/icons-material/Edit';

import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import useFetchCuisines from '../hooks/useFetchCuisines';
import LoaderSpinner from '../components/LoaderSpinner';
import { Box, Grid } from '@mui/material';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const CssTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: '2px solid #F0F1F3',
            borderRadius: '8px'
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
        padding: '10px 0px',
    },
}));


const CssTextFieldMultiSelect = styled(TextField)(({ theme }) => ({
    '& .MuiInputLabel-root': { // Style for the label
        fontSize: '12px', // Set the font size for the label
        color: '#777777',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: '2px solid #F0F1F3',
            borderRadius: '12px',
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
        padding: '0px 0px',
        height: '10px'
    },
}));

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));




const Cuisines = () => {

    const { cuisinesList, loading, setCuisinesList } = useFetchCuisines()
    const [selectedOptions, setSelectedOptions] = useState({});
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    const handleAutocompleteChange = (event, value, item) => {
        // Update the selected options state
        setSelectedOptions(prevState => ({
            ...prevState,
            [item.id]: value
        }));

        // Update the selected property of the children array
        const updatedOccasions = cuisinesList?.map((occasion) => {
            if (occasion.id === item.id) {
                occasion.children = occasion.children.map(child => ({
                    ...child,
                    selected: value.includes(child.name) ? "1" : "0"
                }));
            }
            return occasion;
        });
        console.log(updatedOccasions, "updatedOccasions");
        setCuisinesList(updatedOccasions);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formattedData = Object.entries(selectedOptions).map(([key, value]) => ({
            cuisine_id: key,
            selected: value.map(option => ({ name: option, selected: 1 }))
        }))
        console.log('Selected options:', formattedData);
    };

    console.log(cuisinesList, "cuisinesList");


    const backend = [{"cuisine_id":1,"selected":1},{"cuisine_id":2,"selected":1},{"cuisine_id":3,"selected":1},{"cuisine_id":4,"selected":0},{"cuisine_id":5,"selected":1},{"cuisine_id":6,"selected":1}]
    console.log(backend, "backend");

    return (
        <>
            <TopHeader title="Manage Your Cuisines" description="Add your Cuisines below" />

            <Container maxWidth="lg">
                <div className='card-box-shadow px-5 py-4 mb-4'>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <p className='cuisines-title'>Cuisines You cater</p>
                        <Button variant="contained" className="inquiries-btn" onClick={handleClickOpen}> + Add more Cuisines </Button>
                    </Stack>
                    <Divider
                        className='mt-4'
                        variant="middle"
                        style={{
                            backgroundColor: '#c33332',
                            margin: '0px'
                        }}
                    />

                    {/* <Stack direction="row" justifyContent="end" className='mt-4 cursor-pointer' onClick={handleClickOpen}>
                        <EditIcon className='text-primary' style={{ fontSize: '18px' }} />
                    </Stack> */}

                    {
                        loading ? (
                            <LoaderSpinner />
                        ) : (
                            <Stack className='mt-4'>
                                {
                                    cuisinesList.length >= 0 && cuisinesList.map((item) => (
                                        <Box sx={{ flexGrow: 1 }} style={{ marginTop: '20px' }}>
                                            <Button variant="contained" className="cuisines-list-btn mb-2"> {item?.name} </Button>
                                            <Grid container spacing={2}>
                                                {item?.children?.map((childItem) => (
                                                    <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                                                        <div className="explore-cator-box">
                                                            <img src={childItem?.file_name?.medium} alt="" className="img-fluid caterers-occasion-img image-shadow" />
                                                            <h4 className='text-center caterers-occasion-title'>{childItem?.name}</h4>
                                                        </div>
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </Box>
                                    ))
                                }
                            </Stack>
                        )
                    }
                </div>
            </Container>


            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                maxWidth="sm"
                fullWidth
            >
                <form onSubmit={handleSubmit}>
                    <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                        <h2 className='cusines-modal-title'>Choose Your Cuisines From the List</h2>
                    </DialogTitle>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <DialogContent dividers>
                        <Grid container spacing={2}>
                            {cuisinesList?.map((item) => (
                                <Grid item xs={12} sm={6} md={6} lg={3} xl={3} key={item.id}>
                                    <Autocomplete
                                        multiple
                                        id="checkboxes-tags-demo"
                                        options={item.children.map(child => child.name)}
                                        disableCloseOnSelect
                                        getOptionLabel={(option) => option}
                                        renderOption={(props, option, { selected }) => (
                                            <li {...props} style={{ fontSize: '10px' }}>
                                                <Checkbox
                                                    style={{ marginRight: 8, fontSize: '10px' }}
                                                    checked={selected}
                                                />
                                                {option}
                                            </li>
                                        )}
                                        renderTags={(value, getTagProps) =>
                                            value.map((option, index) => (
                                                <li key={index} {...getTagProps({ index })} style={{ fontSize: '10px' }}>
                                                    {option}
                                                </li>
                                            ))
                                        }
                                        style={{ width: '100%' }}
                                        renderInput={(params) => (
                                            <CssTextFieldMultiSelect
                                                label={item?.name}
                                                {...params}
                                            />
                                        )}
                                        onChange={(event, value) => handleAutocompleteChange(event, value, item)}
                                    />
                                </Grid>
                            ))}
                        </Grid>

                    </DialogContent>
                    <DialogActions style={{ display: 'flex', justifyContent: 'center' }}>
                        <button type="submit" variant="contained" className="inquiries-btn"> Submit </button>
                    </DialogActions>
                </form>
            </BootstrapDialog>
        </>
    )
}

export default Cuisines


// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

