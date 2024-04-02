import { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom';
import { api, BASE_URL } from '../../api/apiConfig';

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

const CssTextFieldTwo = styled(TextField)(({ theme }) => ({
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
        padding: '6px 20px',
    },
}));

const steps = ['Step 1', 'Step 2'];


const initialProfileState = {
    vendor_service_name: '',
    point_of_contact_name: '',
    business_phone_number: '',
    landline_number: '',
    whatsapp_business_phone_number: ''
}


const initialKycState = {
    aadhar_card_number: '',
    pan_number: '',
    gstin_number: '',
    fssai_document_filename: ''
}

const formatPhoneNumber = (phoneNumber) => {
    const countryCode = '+91';
    const areaCode = phoneNumber.substring(0, 3);
    const firstPart = phoneNumber.substring(3, 6);
    const secondPart = phoneNumber.substring(6);
    return `${countryCode}-${areaCode}${firstPart}${secondPart}`;
};

const formatLandlineNumber = (landlineNumber) => {
    const areaCode = landlineNumber.substring(0, 3);
    const firstPart = landlineNumber.substring(3, 6);
    const secondPart = landlineNumber.substring(6);
    return `${areaCode}-${firstPart}${secondPart}`;
};


const ProfileSteps = () => {
    const { accessToken } = useSelector((state) => state.user.accessToken)
    const [profileUpdate, setProfileUpdate] = useState(initialProfileState)
    const [kycUpdate, setKycUpdate] = useState(initialKycState)

    const navigate = useNavigate();

    const [activeStep, setActiveStep] = useState(0);

    const profileCallApiCall = async () => {
        try {
            const { vendor_service_name, point_of_contact_name, business_phone_number, landline_number, whatsapp_business_phone_number } = profileUpdate;

            const formattedPhoneNumber = formatPhoneNumber(business_phone_number);
            const formattedlandline_number = formatLandlineNumber(landline_number);
            const formattedwhatsapp_business_phone_number = formatPhoneNumber(whatsapp_business_phone_number);

            const data = {
                vendor_service_name,
                point_of_contact_name,
                business_phone_number: formattedPhoneNumber,
                landline_number:formattedlandline_number,
                whatsapp_business_phone_number: formattedwhatsapp_business_phone_number
            }

            const response = await api.post(`${BASE_URL}/register-vendor-profile-update`, data, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            toast.success(response?.data?.message);
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message)
            toast.error(error?.response?.data?.data_validation_errors[0].msg)
        }
    }

    const handleNext = () => {
        if (validateFields()) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            profileCallApiCall()
            setProfileUpdate(initialProfileState)
            console.log(profileUpdate, "profileUpdate");
        } else {
            alert("Please fill in all required fields.");
        }
    };


    const validateFields = () => {
        return (
            profileUpdate.vendor_service_name.trim() !== "" &&
            profileUpdate.point_of_contact_name.trim() !== "" &&
            profileUpdate.business_phone_number.trim() !== ""
        );
    };


    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfileUpdate({ ...profileUpdate, [name]: value })
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleKycChange = (e) => {
        const { name, value } = e.target;
        setKycUpdate({ ...kycUpdate, [name]: value })
    }

    const onKycSubmit = async (e) => {
        e.preventDefault()

        try {
            const { aadhar_card_number, pan_number, gstin_number, fssai_document_filename } = kycUpdate;
            const data = {
                aadhar_card_number,
                pan_number,
                gstin_number,
                fssai_document_filename
            }
            const response = await api.post('/register-vendor-kyc-update', data, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization: `Bearer ${accessToken}`
                }
            });
            toast.success(response?.data?.message);
            setKycUpdate(kycUpdate)
            if (response?.data) {
                navigate("/");
            }
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message)
            toast.error(error?.response?.data?.data_validation_errors[0].msg)
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
                        <div className="ct-box ct-box-padding">
                            <Box sx={{ width: '100%' }}>
                                <Stepper activeStep={activeStep}>
                                    {steps.map((label, index) => {
                                        const stepProps = {};
                                        const labelProps = {};
                                        return (
                                            <Step key={label} {...stepProps}>
                                                <StepLabel {...labelProps}>{label}</StepLabel>
                                            </Step>
                                        );
                                    })}
                                </Stepper>
                                {activeStep === steps.length ? (
                                    <>
                                        <Typography sx={{ mt: 2, mb: 1 }} className='ps-2'>
                                            All steps completed - you&apos;re finished
                                        </Typography>
                                        <Link to="/" className='text-decoration-none'>
                                            <Button variant="contained" className='ct-box-btn-catering' style={{ textTransform: 'capitalize', margin: '0px auto', display: 'block' }}>
                                                Go to Dashboard
                                            </Button>
                                        </Link>
                                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                            <Box sx={{ flex: '1 1 auto' }} />
                                            <Button onClick={handleReset}>Reset</Button>
                                        </Box>
                                    </>
                                ) : (
                                    <>
                                        {activeStep === 0 && <div className="px-2">
                                            <h4 className='ct-box-profile-title pb-1'>Profile Update</h4>
                                            <p className='ct-box-loc-desc'>Let's get started by filling out the form below</p>

                                            <form>
                                                <CssTextField
                                                    required
                                                    value={profileUpdate.vendor_service_name}
                                                    onChange={handleProfileChange}
                                                    name="vendor_service_name"
                                                    variant="outlined"
                                                    label="Enter Your Name"
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
                                                    }}
                                                />

                                                <CssTextField
                                                    required
                                                    value={profileUpdate.point_of_contact_name}
                                                    onChange={handleProfileChange}
                                                    name="point_of_contact_name"
                                                    variant="outlined"
                                                    label="Enter Catering Service Name / Display Name"
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
                                                    }}
                                                />


                                                <CssTextField
                                                    required
                                                    value={profileUpdate.business_phone_number}
                                                    onChange={handleProfileChange}
                                                    name="business_phone_number"
                                                    variant="outlined"
                                                    label="Business Phone Number"
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
                                                    }}
                                                />


                                                <CssTextField
                                                    required
                                                    value={profileUpdate.landline_number}
                                                    onChange={handleProfileChange}
                                                    name="landline_number"
                                                    variant="outlined"
                                                    label="Add Landline Number (Optional)"
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
                                                    }}
                                                />


                                                <CssTextField
                                                    required
                                                    value={profileUpdate.whatsapp_business_phone_number}
                                                    onChange={handleProfileChange}
                                                    name="whatsapp_business_phone_number"
                                                    variant="outlined"
                                                    label="Add Whatsapp Business Number (Optional)"
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
                                                    }}
                                                />

                                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                                    <Button
                                                        color="inherit"
                                                        disabled={activeStep === 0}
                                                        onClick={handleBack}
                                                        sx={{ mr: 1 }}
                                                    >
                                                        Back
                                                    </Button>
                                                    <Box sx={{ flex: '1 1 auto' }} />

                                                    <Button type='submit' onClick={() => handleNext()} className='ct-box-btn-profile-step'>
                                                        Next
                                                    </Button>

                                                </Box>

                                            </form>

                                        </div>
                                        }
                                        {activeStep === 1 && <div className="px-2">

                                            <form onSubmit={onKycSubmit}>

                                                <h4 className='ct-box-profile-title mt-1'>Please Enter Your Aadhar Card Number *</h4>
                                                <CssTextFieldTwo
                                                    value={kycUpdate.aadhar_card_number}
                                                    name="aadhar_card_number"
                                                    onChange={handleKycChange}
                                                    variant="outlined"
                                                    className='mt-2'
                                                    style={{ width: '100%' }}
                                                    InputLabelProps={{
                                                        style: { color: '#777777', fontSize: '12px' },
                                                    }}
                                                    InputProps={{
                                                        style: {
                                                            borderRadius: '8px',
                                                            backgroundColor: '#FFFFFF',
                                                        },
                                                    }}
                                                />

                                                <h4 className='ct-box-profile-title mt-1'>Please Enter Your PAN Number *</h4>
                                                <CssTextFieldTwo
                                                    value={kycUpdate.pan_number}
                                                    name="pan_number"
                                                    onChange={handleKycChange}
                                                    variant="outlined"
                                                    className='mt-2'
                                                    style={{ width: '100%' }}
                                                    InputLabelProps={{
                                                        style: { color: '#777777', fontSize: '12px' },
                                                    }}
                                                    InputProps={{
                                                        style: {
                                                            borderRadius: '8px',
                                                            backgroundColor: '#FFFFFF',
                                                        },
                                                    }}
                                                />

                                                <h4 className='ct-box-profile-title mt-1'>Please Enter Your GSTIN Number *</h4>
                                                <CssTextFieldTwo
                                                    value={kycUpdate.gstin_number}
                                                    name="gstin_number"
                                                    onChange={handleKycChange}
                                                    variant="outlined"
                                                    className='mt-2'
                                                    style={{ width: '100%' }}
                                                    InputLabelProps={{
                                                        style: { color: '#777777', fontSize: '12px' },
                                                    }}
                                                    InputProps={{
                                                        style: {
                                                            borderRadius: '8px',
                                                            backgroundColor: '#FFFFFF',
                                                        },
                                                    }}
                                                />

                                                <h4 className='ct-box-profile-title mt-1'>Please Enter Your FSSAI Licence Number *</h4>
                                                <CssTextFieldTwo
                                                    value={kycUpdate.fssai_document_filename}
                                                    name="fssai_document_filename"
                                                    onChange={handleKycChange}
                                                    variant="outlined"
                                                    className='mt-2'
                                                    style={{ width: '100%' }}
                                                    InputLabelProps={{
                                                        style: { color: '#777777', fontSize: '12px' },
                                                    }}
                                                    InputProps={{
                                                        style: {
                                                            borderRadius: '8px',
                                                            backgroundColor: '#FFFFFF',
                                                        },
                                                    }}
                                                />

                                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                                    <Button
                                                        color="inherit"
                                                        disabled={activeStep === 0}
                                                        onClick={handleBack}
                                                        sx={{ mr: 1 }}
                                                    >
                                                        Back
                                                    </Button>
                                                    <Box sx={{ flex: '1 1 auto' }} />

                                                    <Button type='submit' className='ct-box-btn-profile-step'>
                                                        Submit
                                                    </Button>
                                                </Box>

                                            </form>

                                        </div>
                                        }



                                    </>
                                )}
                            </Box>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default ProfileSteps