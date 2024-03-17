import { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


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

const steps = ['Step 1', 'Step 2', 'Step 3'];

const ProfileSteps = () => {
    const [checkedItems, setCheckedItems] = useState(false);

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleChange = (event) => {
        setCheckedItems(event.target.checked)
    };

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

                                            <CssTextField
                                                id="outlined-number"
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
                                                id="outlined-number"
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
                                                id="outlined-number"
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
                                                id="outlined-number"
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
                                                id="outlined-number"
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

                                        </div>
                                        }
                                        {activeStep === 1 && <div className="px-2">
                                            <h4 className='ct-box-profile-title mb-2'>Upload Your FSSAI Document here</h4>
                                            <Checkbox
                                                size="small"
                                                checked={checkedItems}
                                                onChange={(e) => handleChange(e)}
                                                className={checkedItems ? 'text-red' : 'checkbox-color'}
                                                style={{ marginLeft: '0px', padding: '0px' }}
                                            />
                                            <span className='agree-text ps-1'>I agree</span>
                                            <p className='ct-box-loc-desc mt-2'>
                                                By clicking 'I agree' or continuing to use our services, you acknowledge that you have
                                                read and agree to abide by the terms and conditions outlined in catering's and tiffin's terms of service document, accessible at link, ensuring a clear understanding of the expectations governing our business relationship.
                                            </p>
                                            <Stack direction="row" spacing={2} className='mt-4'>
                                                <Button variant="contained" className='ct-box-btn-upload'>
                                                    Upload Now</Button>
                                                <Button variant="contained" className='ct-box-btn-upload'>
                                                    Upload Later</Button>
                                            </Stack>

                                            <div className='mb-1' style={{ marginTop: '20px', borderTop: '2px solid #c33332' }}>
                                                <Divider />
                                            </div>

                                            <h4 className='ct-box-profile-title mb-2'>KFC Verification</h4>
                                            <Checkbox
                                                size="small"
                                                checked={checkedItems}
                                                onChange={(e) => handleChange(e)}
                                                className={checkedItems ? 'text-red' : 'checkbox-color'}
                                                style={{ marginLeft: '0px', padding: '0px' }}
                                            />
                                            <span className='agree-text ps-1'>I agree</span>
                                            <p className='ct-box-loc-desc mt-2'>
                                                By clicking 'I agree' or continuing to use our services, you acknowledge that you have
                                                read and agree to abide by the terms and conditions outlined in catering and tiffins terms of service document.
                                            </p>
                                        </div>
                                        }
                                        {activeStep === 2 && <div className="px-2">
                                            <h4 className='ct-box-profile-title mb-0'>Aadhar Card</h4>
                                            <p className='ct-box-loc-desc mt-0'>
                                                Please upload your Aadhar card below for compleating your first step of KYC
                                            </p>

                                            <p className='ct-box-loc-desc mt-3'>
                                                Aadhar Card Number
                                            </p>
                                            <CssTextFieldTwo
                                                id="outlined-number"
                                                variant="outlined"
                                                className='mt-0'
                                                style={{ width: '75%' }}
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

                                            <Stack direction="row" spacing={2} className='mt-3'>
                                                <Button variant="contained" className='ct-box-btn-upload'>
                                                    Upload Now</Button>
                                                <Button variant="contained" className='ct-box-btn-upload'>
                                                    Upload Later</Button>
                                            </Stack>

                                            <div className='mb-1' style={{ marginTop: '20px', borderTop: '2px solid #c33332' }}>
                                                <Divider />
                                            </div>

                                            <h4 className='ct-box-profile-title mb-0'>PAN Card</h4>
                                            <p className='ct-box-loc-desc mt-0'>
                                                Please upload your PAN card below for compleating your first step of KYC
                                            </p>

                                            <p className='ct-box-loc-desc mt-3'>
                                                PAN Card Number
                                            </p>
                                            <CssTextFieldTwo
                                                id="outlined-number"
                                                variant="outlined"
                                                className='mt-0'
                                                style={{ width: '75%' }}
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

                                            <div className="mt-3 text-center">
                                                <Button variant="contained" className='ct-box-btn-upload'>
                                                    Upload PAN</Button>
                                            </div>


                                        </div>
                                        }

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

                                            <Button onClick={handleNext} className='ct-box-btn-profile-step'>
                                                {activeStep === steps.length - 1 ? (
                                                    'Submit'
                                                ) : activeStep === steps.length - 2 ? (
                                                    'Verify Now'
                                                ) : (
                                                    'Next'
                                                )}
                                            </Button>
                                        </Box>
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