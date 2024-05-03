
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
import useGetVendor from "../hooks/useGetVendor";
import { useSelector } from "react-redux";
import useFetchPhotoGallery from "../hooks/useFetchPhotoGallery";

const Settings = () => {
  const vendorBusinessProfile = useGetVendor();
  const { isLoading } = useSelector((state) => state.user);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { gallery, onUploadAdharCard, onReUploadAdharCard } = useFetchPhotoGallery()

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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

                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" spacing={2}>
                      <img src="https://dashkit.goodthemes.co/assets/img/avatars/profiles/avatar-1.jpg" className="settings-profile-img" alt="" />
                      <div>
                        <h3 className="settings-user-name"> {vendorBusinessProfile?.vendor_service_name} </h3>
                        <p className="settings-user-number"> {vendorBusinessProfile?.phone_number} </p>
                      </div>
                    </Stack>
                    <EditIcon style={{ color: '#c33332', fontSize: '18px' }} />
                  </Stack>

                  <h2 className="company-id mt-3">Company ID - {vendorBusinessProfile?.company_id} </h2>
                  <p className="company-change-password mt-2 mb-3">Change Login Password below</p>

                  <div>
                    <TextField
                      id="outlined-number"
                      variant="outlined"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      className='mb-1'
                      style={{ width: '100%', }}
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
                            >
                              {showPassword ? <Visibility style={{ fontSize: '16px' }} /> : <VisibilityOff style={{ fontSize: '16px' }} />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Stack direction="row" justifyContent="end">
                      <p className="settings-user-number">Reset Password</p>
                    </Stack>
                  </div>

                  <Divider
                    className='mt-3'
                    variant="middle"
                    style={{
                      backgroundColor: '#c33332',
                      margin: '0px'
                    }}
                  />

                  <p className="company-change-password mt-3 mb-3">Documents</p>

                  <div>
                    <Accordion className="faq-bg" >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <p className="settings-faq-title" style={{ fontSize: '14px', fontWeight: '500' }}> Aadhar Card </p>
                      </AccordionSummary>
                      <AccordionDetails>
                        <p className="settings-small mb-1">Front</p>
                        {/* <img src="https://img.freepik.com/premium-vector/illustration-upload_498740-5719.jpg"
                          alt="" className="img-fluid mx-auto" style={{ width: '250px' }} /> */}
                        {
                          gallery['vendor-enca'] !== undefined ? (
                            <>
                              {gallery['vendor-enca']?.map((logo, index) => (
                                <img
                                  className="img-fluid mx-auto"
                                  style={{ width: '100%', height: '200px', objectFit: 'contain' }}
                                  key={logo?.id}
                                  src={logo?.image_name[0]?.medium}
                                  alt={`Brand Logo ${index}`}
                                />
                              ))}
                            </>
                          ) : (
                            <>
                              <Stack direction="row" justifyContent="center">
                                <img
                                  style={{ width: '200px' }}
                                  src={'https://img.freepik.com/premium-vector/illustration-upload_498740-5719.jpg'}
                                  alt={`Brand Logo`}
                                />
                              </Stack>
                            </>
                          )
                        }
                        <p className="settings-small mt-1">Back</p>

                        <div className="mt-3 text-center">
                          {gallery['vendor-enca']?.length && gallery['vendor-enca']?.length > 0 ? (
                            <>
                              <input
                                accept="image/*"
                                id="contained-button-file"
                                multiple
                                type="file"
                                style={{ display: 'none' }}
                                onChange={onReUploadAdharCard}
                              />
                              <label htmlFor="contained-button-file">
                                <Button variant="contained" component="span" className="cuisines-list-white-btn" disabled={isLoading}>
                                  Re Upload
                                </Button>
                              </label>
                            </>
                          ) : (
                            <>
                              <input
                                accept="image/*"
                                id="contained-button-file"
                                multiple
                                type="file"
                                style={{ display: 'none' }}
                                onChange={onUploadAdharCard}
                              />
                              <label htmlFor="contained-button-file">
                                <Button variant="contained" component="span" className="cuisines-list-white-btn" disabled={isLoading}>
                                  Upload
                                </Button>
                              </label>
                            </>
                          )}

                          {/* <Button variant="contained" className="upload-btn"> */}
                          {/* <CloudUploadIcon style={{ fontSize: '14px' }} className="me-2" /> Upload </Button> */}
                        </div>

                      </AccordionDetails>
                    </Accordion>
                  </div>

                  <div>
                    <Accordion className="faq-bg" >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <p className="settings-faq-title" style={{ fontSize: '14px', fontWeight: '500' }}> PAN Card </p>
                      </AccordionSummary>
                      <AccordionDetails>
                        <img src="https://www.financialexpress.com/wp-content/uploads/2023/09/pancard-news-pixabay.jpg" alt="" className="img-fluid" />
                        <p className="settings-small mt-1">Upload PAN Card</p>

                        <div className="mt-3 text-center">
                          <Button variant="contained" className="upload-btn"> <CloudUploadIcon style={{ fontSize: '14px' }} className="me-2" /> Upload </Button>
                        </div>

                      </AccordionDetails>
                    </Accordion>
                  </div>

                  <div>
                    <Accordion className="faq-bg" >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <p className="settings-faq-title" style={{ fontSize: '14px', fontWeight: '500' }}> GSTIN Number </p>
                      </AccordionSummary>
                      <AccordionDetails>
                        <p className="settings-small mt-1">Enter your GSTIN number below</p>

                        <CssTextField
                          id="outlined-number"
                          variant="outlined"
                          className='mt-2'
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

                      </AccordionDetails>
                    </Accordion>
                  </div>

                  <div>
                    <Accordion className="faq-bg" >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <p className="settings-faq-title" style={{ fontSize: '14px', fontWeight: '500' }}> FSSAI Licence </p>
                      </AccordionSummary>
                      <AccordionDetails>
                        <img src="https://wpassets.adda247.com/wp-content/uploads/multisite/2022/04/29152453/FSSAI-Score-Card-2022.png" alt="" className="img-fluid" />
                        <p className="settings-small mt-1">Upload FSSAI Licence</p>

                        <div className="mt-3 text-center">
                          <Button variant="contained" className="upload-btn"> <CloudUploadIcon style={{ fontSize: '14px' }} className="me-2" /> Upload </Button>
                        </div>

                      </AccordionDetails>
                    </Accordion>
                  </div>

                  <Divider
                    className='mt-3'
                    variant="middle"
                    style={{
                      backgroundColor: '#c33332',
                      margin: '0px'
                    }}
                  />

                  <p className="company-change-password mt-3 mb-3">Links</p>

                  <Link to="/dashboard/about-us" className="text-decoration-none">
                    <Stack className="setting-link-box" direction="row" justifyContent="space-between" alignItems="center">
                      <p className="settings-faq-title" style={{ fontSize: '14px', fontWeight: '500' }}>About Us</p>
                      <KeyboardArrowRightIcon style={{ fontSize: '18px', color: '#57636c' }} />
                    </Stack>
                  </Link>

                  <Link to="/dashboard/faq" className="text-decoration-none">
                    <Stack className="setting-link-box mt-3" direction="row" justifyContent="space-between" alignItems="center">
                      <p className="settings-faq-title" style={{ fontSize: '14px', fontWeight: '500' }}>FAQ's</p>
                      <KeyboardArrowRightIcon style={{ fontSize: '18px', color: '#57636c' }} />
                    </Stack>
                  </Link>

                  <Divider
                    className='mt-3'
                    variant="middle"
                    style={{
                      backgroundColor: '#c33332',
                      margin: '0px'
                    }}
                  />

                  <p className="company-change-password mt-3 mb-3">Help Desk / Support</p>

                  <Link to="/dashboard/raise-ticket">
                    <Button variant="contained" className="cuisines-list-btn" style={{ width: '100%', fontWeight: '500' }}> Raise a Ticket </Button>
                  </Link>

                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  )
}

export default Settings