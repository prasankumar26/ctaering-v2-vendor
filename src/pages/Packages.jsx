import React from 'react'
import TopHeader from '../components/global/TopHeader'
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';


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
    return (
        <>
            <TopHeader title="Manage Your Package" description="Add your Package below" />

            <Container maxWidth="lg">
                <div className='card-box-shadow px-5 pt-2 pb-4 mb-4'>

                    <Grid container spacing={2} className='mt-0'>
                        <Grid item xs={12} lg={6}>
                            <h3 className='package-capacity mt-0'>Choose your food type Below</h3>
                            <p className='max-min-capacity-para text-center mb-3'>If you provide both Veg and Non-Veg, please check both checkboxes.</p>

                            <Stack direction="row" alignItems="center" justifyContent="center" spacing={2} className='mb-5'>
                                <h4 className='package-vn-title-veg'>Veg</h4>  <Switch size='small' defaultChecked sx={{
                                    "&.MuiSwitch-root .MuiSwitch-switchBase": {
                                        color: "#57636c"
                                    },

                                    "&.MuiSwitch-root .Mui-checked": {
                                        color: "#459412"
                                    }
                                }} />
                            </Stack>
                            <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
                                <h4 className='package-vn-title-nonveg'>Non Veg</h4>  <Switch size='small' defaultChecked />
                            </Stack>

                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <h3 className='package-capacity mt-0'>Starting Price / Plate</h3>
                            <p className='max-min-capacity-para-green text-center mt-3'>Enter veg Starting price / plate</p>

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

                            <p className='max-min-capacity-para-red text-center mt-3'>Enter veg Starting price / plate</p>
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
                            <Stack direction="row" justifyContent="center" alignItems="center" spacing="2" className='mt-3'>
                                <img src="/img/icons/delivery.png" alt="" className='package-icons' />
                                <p className='px-3 package-icon-title'>Delivery</p>
                                <Switch size="small" />
                            </Stack>
                            <Stack direction="row" justifyContent="center" alignItems="center" spacing="2" className='mt-3'>
                                <img src="/img/icons/Takeaway.png" alt="" className='package-icons' />
                                <p className='px-3 package-icon-title'>Takeaway</p>
                                <Switch size="small" />
                            </Stack>

                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <h3 className='package-capacity mt-3'>Choose your Serving type Below</h3>
                            <p className='max-min-capacity-para text-center'>If you provide both table and buffet service, please check both</p>
                            <Stack direction="row" justifyContent="center" alignItems="center" spacing="2" className='mt-3'>
                                <img src="/img/icons/delivery.png" alt="" className='package-icons' />
                                <p className='px-3 package-icon-title'>Table Service</p>
                                <Switch size="small" />
                            </Stack>
                            <Stack direction="row" justifyContent="center" alignItems="center" spacing="2" className='mt-3'>
                                <img src="/img/icons/Takeaway.png" alt="" className='package-icons' />
                                <p className='px-3 package-icon-title'>Buffet Service</p>
                                <Switch size="small" />
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

                    <h3 className='package-capacity mt-3'>Capacity</h3>

                    <Grid container spacing={2} className='mt-2'>
                        <Grid item xs={12} lg={6}>
                            <p className='max-min-capacity mb-2'>Minimum Capacity</p>
                            <CssTextField
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
                        <Button variant="contained" className="inquiries-red-btn"> Update </Button>
                    </Stack>



                </div>
            </Container>
        </>
    )
}

export default Packages