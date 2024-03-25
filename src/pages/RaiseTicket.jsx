
import TopHeader from "../components/global/TopHeader"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputAdornment, IconButton } from '@mui/material';
import { useState } from "react";
import Divider from '@mui/material/Divider';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';


const RaiseTicket = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const CssTextField = styled(TextField)(({ theme }) => ({
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: '2px solid #e0e3e7',
            },
            '&:hover fieldset': {
                border: '2px solid #e0e3e7',
            },
            '&.Mui-focused fieldset': {
                border: '2px solid #a81e1e',
            },
        },
        '& input': {
            border: 'none',
            fontSize: '16px',
            padding: '10px 20px',
        },
    }));



    return (
        <>
            <TopHeader title="Settings" description="Manage all your personal settings here" />

            <Container maxWidth="lg">
                <div className='card-box-shadow px-5 py-4 mb-4'>
                    <div className='mt-3 bg-primary'>
                    </div>
                    <Grid container spacing={2} className='box-negative'>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <div className="ct-box ct-box-padding">
                                <div className="px-4">

                                    <Stack direction="row" alignItems="center" className="mb-3">
                                        <ArrowBackIcon className="cursor-pointer" style={{ fontSize: '18px', color: '#c33332' }} onClick={handleBack} /> <h3 className="faq-heading ms-2">Help Desk / Support</h3>
                                    </Stack>

                                    <h2 className="rt-heading mb-4 mt-5">Raise a Ticket</h2>

                                    <CssTextField
                                        id="outlined-number"
                                        variant="outlined"
                                        label="Issue"
                                        className='mb-3'
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


                                    <div className="mt-1">
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <textarea
                                                rows="20"
                                                name="comment[text]"
                                                id="comment_text"
                                                cols="40"
                                                placeholder="comments..."
                                                className="job-textarea"
                                                autoComplete="off"
                                                role="textbox"
                                                aria-autocomplete="list"
                                                aria-haspopup="true"
                                            ></textarea>
                                        </Box>
                                    </div>



                                    <Stack direction="row" justifyContent="center" className="mt-4">
                                        <Button variant="contained" className="inquiries-red-btn"> Submit </Button>
                                    </Stack>





                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </>
    )
}

export default RaiseTicket