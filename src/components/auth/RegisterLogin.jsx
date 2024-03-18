import { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputAdornment, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
        padding: '10px 20px',
    },
}));



const RegisterLogin = () => {
    const [value, setValue] = useState('1');
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };


    return (
        <>
            <Container maxWidth="lg">
                <div className='mt-3 bg-primary'>
                    <h1 className='ct-heading'>caterings Service</h1>
                </div>
                <Grid container spacing={2} className='box-negative'>
                    <Grid item xs={12} sm={6.5} md={4.5} lg={4.5}>
                        <div className="ct-box">
                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                <TabContext value={value}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }} className="custom-tab-list">
                                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                                            <Tab label="Create Account" value="1" sx={{ fontSize: '12px', '&.Mui-selected': { color: '#14181b' } }} />
                                            <Tab label="Log In" value="2" sx={{ fontSize: '12px', '&.Mui-selected': { color: '#14181b' } }} />
                                        </TabList>
                                    </Box>
                                    <TabPanel value="1" style={{ padding: '0px' }} className='mt-4'>
                                        <div>
                                            {/* <img style={{ width: '250px', margin: '0px auto' }} className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGi8Xwursr5Hrevjhswt2HnuVBVm1iEPYiw1-VUSpc4S_6uNQzaEwwsM9I2cobjjfKcNw&usqp=CAU" alt="" /> */}

                                            <div className="px-4">
                                                <h4 className='ct-create-account'>Create Account</h4>
                                                <p className='ct-create-para'>Let's get started by filling out the form below.</p>

                                                <CssTextField
                                                    id="outlined-number"
                                                    variant="outlined"
                                                    label="Enter your Name Here"
                                                    className='mt-3'
                                                    style={{ width: '100%' }}
                                                    InputLabelProps={{
                                                        style: { color: '#777777', fontSize: '12px' },
                                                    }}
                                                    InputProps={{
                                                        style: {
                                                            borderRadius: '8px',
                                                            backgroundColor: '#FFFFFF',
                                                        }
                                                    }}
                                                />

                                                <CssTextField
                                                    id="outlined-number"
                                                    variant="outlined"
                                                    label="Enter your Phone Number"
                                                    className='mt-3 mb-3'
                                                    style={{ width: '100%' }}
                                                    InputLabelProps={{
                                                        style: { color: '#777777', fontSize: '12px' },
                                                    }}
                                                    InputProps={{
                                                        style: {
                                                            borderRadius: '8px',
                                                            backgroundColor: '#FFFFFF',
                                                        }
                                                    }}
                                                />



                                                <div class="otp-input-fields mb-3">
                                                    <input type="number" class="otp__digit otp__field__1" />
                                                    <input type="number" class="otp__digit otp__field__2" />
                                                    <input type="number" class="otp__digit otp__field__3" />
                                                    <input type="number" class="otp__digit otp__field__4" />
                                                    <input type="number" class="otp__digit otp__field__5" />
                                                    <input type="number" class="otp__digit otp__field__6" />
                                                </div>



                                                <Link to="/enter-location" className='text-decoration-none'>
                                                    <Button variant="contained" className='ct-box-btn-catering' style={{ textTransform: 'capitalize', margin: '0px auto', display: 'block' }}>
                                                        Get Otp
                                                    </Button>
                                                </Link>
                                                <p className='ct-box-both'>resend otp in : 30</p>
                                                <KeyboardArrowLeftIcon style={{ color: '#57636c', cursor: 'pointer' }} onClick={handleBack} />
                                            </div>

                                        </div>
                                    </TabPanel>
                                    <TabPanel value="2" style={{ padding: '0px' }} className='mt-4'>
                                        <div>
                                            {/* <img style={{ width: '250px', margin: '0px auto' }} className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGi8Xwursr5Hrevjhswt2HnuVBVm1iEPYiw1-VUSpc4S_6uNQzaEwwsM9I2cobjjfKcNw&usqp=CAU" alt="" /> */}

                                            <div className="px-4">
                                                <h4 className='ct-create-account'>Welcome Back</h4>
                                                <p className='ct-create-para'>Fill out the information below in order to access your account.</p>

                                                <CssTextField
                                                    id="outlined-number"
                                                    variant="outlined"
                                                    label="Business ID"
                                                    className='mt-3 mb-3'
                                                    style={{ width: '100%' }}
                                                    InputLabelProps={{
                                                        style: { color: '#777777', fontSize: '12px' },
                                                    }}
                                                    InputProps={{
                                                        style: {
                                                            borderRadius: '8px',
                                                            backgroundColor: '#FFFFFF',
                                                        }
                                                    }}
                                                />

                                                <CssTextField
                                                    id="outlined-number"
                                                    variant="outlined"
                                                    type='password'
                                                    label="Password"
                                                    className='mb-3'
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
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    onClick={handleTogglePasswordVisibility}
                                                                    edge="end"
                                                                >
                                                                    {showPassword ? <Visibility style={{ fontSize: '16px' }} /> : <VisibilityOff style={{ fontSize: '16px' }} />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        ),
                                                    }}

                                                />

                                                <Link to="/enter-location" className='text-decoration-none'>
                                                    <Button variant="contained" className='ct-box-btn-catering' style={{ textTransform: 'capitalize', margin: '0px auto', display: 'block' }}>
                                                        Get Otp
                                                    </Button>
                                                </Link>
                                                <p className='ct-box-both' style={{ fontWeight: '600', color: '#14181b' }}>Forgot Password?</p>

                                                <KeyboardArrowLeftIcon style={{ color: '#57636c', cursor: 'pointer' }} onClick={handleBack} />
                                            </div>

                                        </div>
                                    </TabPanel>
                                </TabContext>
                            </Box>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default RegisterLogin