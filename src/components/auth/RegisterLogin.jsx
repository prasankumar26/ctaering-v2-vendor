import { useEffect, useRef, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import LoginVendor from './LoginVendor';
import useRegistration from '../../hooks/useRegistration';
import { vendor_type } from '../../constant';
import { api } from '../../api/apiConfig';


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


const initialState = {
    phone_number: '',
    point_of_contact_name: '',
    phone_number_extension: '+91',
    vendor_type: vendor_type
}


const OtpInput = ({ length = 6, onOtpSubmit = () => { } }) => {
    const [otp, setOtp] = useState(new Array(length).fill(''));
    const inputRefs = useRef([]);

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus()
        }
    }, [])

    const handleChange = (index, e) => {
        const value = e.target.value;
        if (isNaN(value)) return;

        const newOtp = [...otp]
        //allow only one input
        newOtp[index] = value.substring(value.length - 1)
        setOtp(newOtp)

        // submit trigger 
        const combinedOtp = newOtp.join("");
        if (combinedOtp.length === length) onOtpSubmit(combinedOtp)


        // Focus on the next input box if available
        if (value !== '' && index < length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }

    }

    const handleClick = (index) => {
        inputRefs.current[index].setSelectionRange(1, 1)

        // optional
        if (index > 0 && !otp[index - 1]) {
            inputRefs.current[otp.indexOf("")].focus()
        }
    }

    const handleKeyDown = (index, e) => {
        // Moving focus on pressing back space 
        if (e.key === 'Backspace' && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1].focus();
        }
    }

    return (
        <div className='otp-input-fields'>
            {
                otp.map((value, index) => {
                    return <input
                        ref={(input) => (inputRefs.current[index] = input)}
                        key={index}
                        type="text"
                        value={value}
                        onChange={(e) => handleChange(index, e)}
                        onClick={() => handleClick(index)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className='otp__digit'
                    />
                })
            }
        </div>
    )
}



const RegisterLogin = () => {
    // const [loading, setLoading] = useState(false)
    const [value, setValue] = useState('1');
    const [register, setRegister] = useState(initialState)
    const [registerData, setRegisterData] = useState({})
    const [showOtp, setShowOtp] = useState(true)
    const [otp, setOtp] = useState(['', '', '', '', '', ''])
    const user = useSelector((state) => state.user.userData)
    const dispatch = useDispatch()
    const { loading, registerVendor, verifyOtp, resendOtp } = useRegistration();

    const otpInputs = useRef([])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    // onHandleChangeRegister 
    const onHandleChangeRegister = (event) => {
        const { name, value } = event.target;
        setRegister({ ...register, [name]: value })
    }

    // onHandleRegisterSubmit 
    const onHandleRegisterSubmit = async (event) => {
        event.preventDefault();
        registerVendor(register, setRegisterData, setShowOtp, setRegister, initialState);
    }

    // resendOtp 
    const handleResendOtp = async () => {
        try {
            await resendOtp(user); 
        } catch (error) {
            console.error('Error while resending OTP:', error);
        }
    }

    // onOtpSubmit 
    const onOtpSubmit = (otp) => {
        verifyOtp(otp, user, setOtp, setValue);
        console.log('Login Successfully', otp);
    }


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
                                            {showOtp ? <form onSubmit={onHandleRegisterSubmit} className="px-4">
                                                <h4 className='ct-create-account'>Create Account</h4>
                                                <p className='ct-create-para'>Let's get started by filling out the form below.</p>

                                                <CssTextField
                                                    required
                                                    variant="outlined"
                                                    label="Enter your Name Here"
                                                    className='mt-3'
                                                    name='point_of_contact_name'
                                                    value={register.point_of_contact_name}
                                                    onChange={onHandleChangeRegister}
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
                                                    required
                                                    variant="outlined"
                                                    label="Enter your Phone Number"
                                                    className='mt-3 mb-3'
                                                    style={{ width: '100%' }}
                                                    name='phone_number'
                                                    value={register.phone_number}
                                                    onChange={onHandleChangeRegister}
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

                                                <Button disabled={loading} variant="contained" type='submit' className='ct-box-btn-catering' style={{ textTransform: 'capitalize', margin: '0px auto', display: 'block' }}>
                                                    {loading ? 'Loading...' : 'Get Otp'}
                                                </Button>
                                            </form> : <form>
                                                <div className="otp-input-fields mb-3">
                                                    <OtpInput length={6} onOtpSubmit={onOtpSubmit} />
                                                </div>

                                                <Button disabled={loading} variant="contained" type='submit' className='ct-box-btn-catering' style={{ textTransform: 'capitalize', margin: '0px auto', display: 'block' }}>
                                                    {loading ? 'Loading...' : 'Submit'}
                                                </Button>
                                                <p className='ct-box-both' onClick={handleResendOtp}>resend otp in : 30</p>
                                            </form>}

                                            <KeyboardArrowLeftIcon style={{ color: '#57636c', cursor: 'pointer' }} onClick={handleBack} />
                                        </div>
                                    </TabPanel>
                                    <TabPanel value="2" style={{ padding: '0px' }} className='mt-4'>
                                        <LoginVendor />
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