import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EnterLocation = () => {

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
                                <h4 className='ct-box-loc-title'>Whats's your location?</h4>
                                <p className='ct-box-loc-desc'>Could you please share your company location to receive personalized promotions</p>
                                <img style={{ width: '250px' }} src="https://png.pngtree.com/png-vector/20231214/ourmid/pngtree-protect-heart-day-doctor-heart-disease-day-3d-building-isometric-png-image_11353346.png" alt="" className="img-fluid mx-auto" />

                                <Stack direction="column">
                                    <>
                                    <Link to="/profile-steps" className="text-decoration-none text-center">
                                        <Button variant="contained" className='ct-box-allow-location'>Allow Location Access</Button>
                                    </Link>
                                    <Link to="/enter-location-manually" className="text-decoration-none text-center">
                                        <Button variant="contained" className='ct-box-loc'>Enter Location Manually</Button>
                                    </Link>
                                    </>
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

export default EnterLocation