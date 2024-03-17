import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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



const EnterLocationManually = () => {

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
                        <div className="ct-box ct-box-padding">
                            <div className="px-4">
                                <h4 className='ct-box-loc-title'>Enter your area or address</h4>

                                <CssTextField
                                    id="outlined-number"
                                    variant="outlined"
                                    label="Try A2B, Mg road, Bangalore, etc."
                                    className='mt-3 mb-2'
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
                                            <InputAdornment position="end" style={{ color: '#00000' }}>
                                                <SearchIcon style={{ fontSize: '16px' }} />
                                            </InputAdornment>
                                        )
                                    }}
                                />

                                <Button variant="contained" className='ct-box-btn-current-loc'>Use my current location</Button>

                                <div className='mb-3' style={{ marginTop: '20px', borderTop: '2px solid #c33332' }}>
                                    <Divider />
                                </div>

                                <p className='ct-box-search-loc mb-1'>Search Results</p>

                                <h2 className='ct-box-search-results'>Chennai</h2>
                                <h2 className='ct-box-search-results'>Chennai</h2>
                                <h2 className='ct-box-search-results'>Chennai</h2>

                                <Stack direction="column" className='mt-5'>
                                    <Link to="/profile-steps" className="text-decoration-none text-center">
                                        <Button variant="contained" className='ct-box-btn-catering'>Next</Button>
                                    </Link>
                                </Stack>
                                <KeyboardArrowLeftIcon style={{ color: '#57636c', marginTop: '30px', cursor: 'pointer' }} onClick={handleBack} />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default EnterLocationManually