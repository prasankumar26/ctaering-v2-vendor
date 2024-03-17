import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <>
            <Container maxWidth="lg">
                <div className='mt-3 bg-gradient'>
                    <h1 className='ct-heading'>caterings & Tiffins</h1>
                </div>

                <Grid container spacing={2} className='box-negative'>
                    <Grid item xs={12} sm={6.5} md={4.5} lg={4}>
                        <div className="ct-box">
                            <h2 className='ct-box-title'>Choose the service</h2>
                            <span className="ct-box-line"></span>
                            <img style={{ width: '300px', margin: '0px auto' }} className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGi8Xwursr5Hrevjhswt2HnuVBVm1iEPYiw1-VUSpc4S_6uNQzaEwwsM9I2cobjjfKcNw&usqp=CAU" alt="" />

                            <Stack direction="column" justifyContent="center" className='text-center'>
                                <Link to="/create-account"> <Button variant="contained" className='ct-box-btn-catering'>Catering Service</Button> </Link>
                                <Button variant="contained" className='ct-box-btn-tiffin'>Tiffin Service</Button>
                                <p className='ct-box-both'>Or Both</p>
                                <Button variant="contained" className='ct-box-btn-catering-tiffin'>Catring & Tiffin Service</Button>
                            </Stack>

                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Landing