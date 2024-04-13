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
import { Formik } from 'formik';
import * as Yup from 'yup';


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

const initialloginState = {
    company_id: '',
    password: ''
}


const LoginVendor = () => {
    const [showPassword, setShowPassword] = useState(false);
    // const { accessToken } = useSelector((state) => state.user.accessToken)
    // const { userData } = useSelector((state) => state.user)

    // validationSchema 
    const validationSchema = Yup.object().shape({
        company_id: Yup.string()
            .required('Company ID is required'),
        password: Yup.string()
            .required('Password is required')
    });


    const handleTogglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    const handleSubmit = (values, resetForm) => {
        console.log(values, "values");
        resetForm()
    }

    return (
        <div>
            <div className="px-4">
                <h4 className='ct-create-account'>Welcome Back</h4>
                <p className='ct-create-para'>Fill out the information below in order to access your account.</p>

                <Formik initialValues={initialloginState} validationSchema={validationSchema} onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}>
                    {({ values, errors, handleChange, handleSubmit, isValid }) => (
                        <form onSubmit={handleSubmit}>

                            <CssTextField
                                value={values.company_id}
                                onChange={handleChange}
                                name="company_id"
                                id="outlined-number"
                                variant="outlined"
                                label="Business ID"
                                className='mt-3 mb-0'
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
                            {errors.company_id && <small className='text-danger mb-2 ms-1'>{errors.company_id}</small>}


                            <CssTextField
                                value={values.password}
                                onChange={handleChange}
                                name="password"
                                id="outlined-number"
                                variant="outlined"
                                type={showPassword ? 'text' : 'password'}
                                label="Password"
                                className='mt-3'
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
                            {errors.password && <small className='text-danger mb-2 ms-1'>{errors.password}</small>} 


                            {/* <Link to="/enter-location" className='text-decoration-none'> */}
                            <div className="mt-3">
                            <Button type='submit' variant="contained" className='ct-box-btn-catering' 
                            style={{ textTransform: 'capitalize', margin: '0px auto', display: 'block' }}>
                                Get Otp
                            </Button>
                            </div>
                            {/* </Link> */}
                        </form>
                    )}
                </Formik>

                <p className='ct-box-both' style={{ fontWeight: '600', color: '#14181b' }}>Forgot Password?</p>

                <KeyboardArrowLeftIcon style={{ color: '#57636c', cursor: 'pointer' }} onClick={handleBack} />
            </div>
        </div >
    )
}

export default LoginVendor;
