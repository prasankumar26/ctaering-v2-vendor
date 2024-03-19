import TopHeader from "../components/global/TopHeader"
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


const CssTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: '2px solid #F0F1F3',
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


const BusinesssProfile = () => {
  return (
    <>
      <TopHeader title="Business Profile" description="below is a business overview" />

      <Container maxWidth="lg">
        <div className='card-box-shadow px-5 py-4 mb-4'>

          <p className='cuisines-title text-center'>BUSINESS INFORMATION</p>
          <Divider
            className='mt-2'
            variant="middle"
            style={{
              backgroundColor: '#c33332',
              margin: '0px',
              width: '35%',
              margin: '0px auto'
            }}
          />

          <Stack direction="row" justifyContent="end" className='mt-4 cursor-pointer'>
            <EditIcon className='text-primary' style={{ fontSize: '18px' }} />
          </Stack>


          <Grid container spacing={2} className="mt-4">
            <Grid item xs={6}>
              <div>
                <p className="business-profile-name">Catering Name</p>
                <CssTextField
                  id="outlined-number"
                  variant="outlined"
                  label="Enter Your Catering Service Name"
                  className='mt-0'
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
              </div>

              <div className="mt-3">
                <p className="business-profile-name">Conatct person Name</p>
                <CssTextField
                  id="outlined-number"
                  variant="outlined"
                  label="Enter Conatct person name"
                  className='mt-0'
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
              </div>

              <div className="mt-3">
                <p className="business-profile-name">Working days/hours</p>
                <CssTextField
                  id="outlined-number"
                  variant="outlined"
                  label="Eg. Monday - Saturday (9A - 10PM) - Date and Time Picker"
                  className='mt-0'
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
              </div>

              <div className="mt-3">
                <p className="business-profile-name">Total No. of Staffs Approx</p>
                <CssTextField
                  id="outlined-number"
                  variant="outlined"
                  label="Eg. 10 - 15"
                  className='mt-0'
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
              </div>

            </Grid>
            <Grid item xs={6}>
              <div>
                <p className="business-profile-name">Street Name</p>
                <CssTextField
                  id="outlined-number"
                  variant="outlined"
                  label="Eg. 8th Cross Street"
                  className='mt-0'
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
              </div>

              <div className="mt-3">
                <p className="business-profile-name">Area</p>
                <CssTextField
                  id="outlined-number"
                  variant="outlined"
                  label="Eg. Near Kalyan Nagar post"
                  className='mt-0'
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
              </div>

              <div className="mt-3">
                <p className="business-profile-name">City</p>
                <CssTextField
                  id="outlined-number"
                  variant="outlined"
                  label="Eg. Bangalore"
                  className='mt-0'
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
              </div>

              <div className="mt-3">
                <p className="business-profile-name">Pin Code</p>
                <CssTextField
                  id="outlined-number"
                  variant="outlined"
                  label="Eg. 624 301"
                  className='mt-0'
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
              </div>


            </Grid>
          </Grid>


          <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item xs={8} >
              <div className="mt-5">
                <p className="business-profile-name">About</p>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <textarea rows="20" name="comment[text]" id="comment_text" cols="40"
                    className="job-textarea" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true"></textarea>
                </Box>
              </div>
            </Grid>
          </Grid>


          <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item xs={8} >
              <div className="mt-3">
                <p className="business-profile-name">Working Since</p>
                <CssTextField
                  id="outlined-number"
                  variant="outlined"
                  label="Enter Your Catering Service Name"
                  className='mt-0'
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
              </div>
            </Grid>
          </Grid>





          <p className='cuisines-title text-center mt-5'>CONTACT DETAILS</p>

          <Divider
            className='mt-2 mb-5'
            variant="middle"
            style={{
              backgroundColor: '#c33332',
              margin: '0px',
              width: '35%',
              margin: '0px auto'
            }}
          />

          <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item xs={8} >
              <div>
                <p className="business-profile-name">Business Email Id</p>
                <CssTextField
                  id="outlined-number"
                  variant="outlined"
                  className='mt-0'
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
              </div>

              <div className="mt-3">
                <p className="business-profile-name">Business Phone Number</p>
                <CssTextField
                  id="outlined-number"
                  variant="outlined"
                  className='mt-0'
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
              </div>

              <div className="mt-3">
                <p className="business-profile-name">Alternative Phone Number / Landline Number</p>
                <CssTextField
                  id="outlined-number"
                  variant="outlined"
                  className='mt-0'
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
              </div>

              <div className="mt-3">
                <p className="business-profile-name">Whatsapp Business Number</p>
                <CssTextField
                  id="outlined-number"
                  variant="outlined"
                  className='mt-0'
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
              </div>
            </Grid>
          </Grid>





          <p className='cuisines-title text-center mt-5'>OTHERS</p>

          <Divider
            className='mt-2 mb-5'
            variant="middle"
            style={{
              backgroundColor: '#c33332',
              margin: '0px',
              width: '35%',
              margin: '0px auto'
            }}
          />

          <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item xs={8} >
              <div>
                <p className="business-profile-name">Website link(optional)</p>
                <CssTextField
                  id="outlined-number"
                  variant="outlined"
                  className='mt-0'
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
              </div>

              <div className="mt-3">
                <p className="business-profile-name">Twitter Id (optional)</p>
                <CssTextField
                  id="outlined-number"
                  variant="outlined"
                  className='mt-0'
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
              </div>

              <div className="mt-3">
                <p className="business-profile-name">Instagram Link (optional)</p>
                <CssTextField
                  id="outlined-number"
                  variant="outlined"
                  className='mt-0'
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
              </div>

              <div className="mt-3">
                <p className="business-profile-name">Facebook link (optional)</p>
                <CssTextField
                  id="outlined-number"
                  variant="outlined"
                  className='mt-0'
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
              </div>
            </Grid>
          </Grid>


        <Stack direction="row" justifyContent="center" className="mt-4">
        <Button variant="contained" className="inquiries-red-btn"> Update </Button>
        </Stack>




        </div>
      </Container>
    </>
  )
}

export default BusinesssProfile