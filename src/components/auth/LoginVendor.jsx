import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputAdornment, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useNavigate } from 'react-router-dom';
import { api, BASE_URL } from '../../api/apiConfig';
import { useSelector } from 'react-redux'
import axios from 'axios'

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

const LoginVendor = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { accessToken } = useSelector((state) => state.user.accessToken)
    const { userData } = useSelector((state) => state.user)
    console.log(userData, "userData");
    console.log(accessToken, "accessToken");


    const handleTogglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };


    return (
        <div>
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
                    type={showPassword ? 'text' : 'password'}
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
                                    size="large"
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
    )
}

export default LoginVendor;
