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
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import moment from 'moment';
import useBusinessProfile from "../hooks/useBusinessProfile";
import { vendor_type } from "../constant";

import { Formik } from 'formik';
import * as Yup from 'yup';
import { api, BASE_URL } from "../api/apiConfig";


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


const initialState = {
  vendor_service_name: "",
  vendor_type: vendor_type,
  contact_person_name: "",
  working_days_hours: "",
  working_since: "",
  about_description: "",
  city_id: "",
  total_staffs_approx: "",
  pincode: "",
  business_email: "",
  business_phone_number: "",
  landline_number: "",
  whatsapp_business_phone_number: "",
  website_link: "",
  twitter_id: "",
  instagram_link: "",
  facebook_link: "",
  latitude: "",
  area: "",
  street_name: "",
  longitude: "",
  country: "",
  state: "",
  formatted_address: "",
  city: "",
  place_id: "",
}


const BusinesssProfile = () => {


  const [values, setValues] = useState({})
  const { accessToken } = useSelector((state) => state.user)
  const { vendor_id } = useSelector((state) => state?.user?.vendorId)
  const [loading, setLoading] = useState(false)
  const [data, updateBusinessProfile] = useBusinessProfile('/get-vendor-business-profile', accessToken)

  console.log(values, "valuesvaluesvaluesvaluesvaluesvalues");
  // console.log(data, "data");
  // console.log(values, "values");

  useEffect(() => {
    setValues((prevValues) => ({
      ...prevValues,
      vendor_service_name: data?.vendor_service_name,
      vendor_type: vendor_type,
      contact_person_name: data?.contact_person_name,
      working_days_hours: data?.working_days_hours,
      working_since: moment(data?.working_since).format('YYYY-MM-DD'),
      about_description: data?.about_description,
      city_id: data?.city_id,
      total_staffs_approx: data?.total_staffs_approx,
      pincode: data?.pincode,
      business_email: data?.business_email,
      business_phone_number: data?.business_phone_number,
      landline_number: data?.landline_number,
      whatsapp_business_phone_number: data?.whatsapp_business_phone_number,
      website_link: data?.website_link,
      twitter_id: data?.twitter_id,
      instagram_link: data?.instagram_link,
      facebook_link: data?.facebook_link,
      latitude: data?.latitude,
      area: data?.area,
      street_name: data?.street_name,
      longitude: data?.longitude,
      country: data?.country,
      state: data?.state,
      formatted_address: data?.formatted_address,
      city: data?.city,
      place_id: data?.place_id,
    }));
  }, [data]);
  

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setValues({ ...values, [name]: value })
  // }

  // validation schema 
  const schema = Yup.object().shape({
    vendor_service_name: Yup.string().required('Name is required.'),
    street_name: Yup.string().required('street name is required.'),
    contact_person_name: Yup.string().required('contact person name is required.'),
    area: Yup.string().required('area is required.'),
    working_days_hours: Yup.string().required('working days hours is required.'),
    city: Yup.string().required('city is required.'),
    total_staffs_approx: Yup.string().required('total staffs approx is required.'),
    pincode: Yup.string().required('pincode is required.'),
    about_description: Yup.string().required('about description is required.'),
    working_since: Yup.string().required('working since is required.'),
  });

  const handleSubmit = async (values, resetForm) => {
    console.log(values, "values");
    try {
      setLoading(true);
      await updateBusinessProfile(values, vendor_id);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error while updating business profile:', error);
    }
  }




  return (
    <>
      <TopHeader title="Business Profile" description="below is a business overview" />

      <Container maxWidth="lg">
        {/*   */}
        <Formik enableReinitialize={true} initialValues={values} validationSchema={schema} onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}>
          {({ values, errors, handleChange, handleSubmit }) => (
            <form className='card-box-shadow px-5 py-4 mb-4' onSubmit={handleSubmit}>
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

              {/* <Stack direction="row" justifyContent="end" className='mt-4 cursor-pointer'>
                <EditIcon className='text-primary' style={{ fontSize: '18px' }} />
              </Stack> */}


              <Grid container spacing={2} className="mt-4">
                <Grid item xs={6}>
                  <div>
                    <p className="business-profile-name">Catering Name</p>
                    <CssTextField
                      value={values.vendor_service_name}
                      onChange={handleChange}
                      name="vendor_service_name"
                      variant="outlined"
                      placeholder="Enter Your Catering Service Name"
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
                    {errors.vendor_service_name && <small className='text-danger mt-2 ms-1'>{errors.vendor_service_name}</small>}
                  </div>

                  <div className="mt-3">
                    <p className="business-profile-name">Conatct person Name</p>
                    <CssTextField
                      value={values.contact_person_name}
                      onChange={handleChange}
                      name="contact_person_name"
                      variant="outlined"
                      placeholder="Enter Conatct person name"
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
                    {errors.contact_person_name && <small className='text-danger mt-2 ms-1'>{errors.contact_person_name}</small>}
                  </div>

                  <div className="mt-3">
                    <p className="business-profile-name">Working days/hours</p>
                    <CssTextField
                      value={values.working_days_hours}
                      onChange={handleChange}
                      name="working_days_hours"
                      variant="outlined"
                      placeholder="Eg. Monday - Saturday (9A - 10PM) - Date and Time Picker"
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
                    {errors.working_days_hours && <small className='text-danger mt-2 ms-1'>{errors.working_days_hours}</small>}
                  </div>

                  <div className="mt-3">
                    <p className="business-profile-name">Total No. of Staffs Approx</p>
                    <CssTextField
                      value={values.total_staffs_approx}
                      onChange={handleChange}
                      name="total_staffs_approx"
                      variant="outlined"
                      placeholder="Eg. 10 - 15"
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
                    {errors.total_staffs_approx && <small className='text-danger mt-2 ms-1'>{errors.total_staffs_approx}</small>}
                  </div>

                </Grid>
                <Grid item xs={6}>
                  <div>
                    <p className="business-profile-name">Street Name</p>
                    <CssTextField
                      value={values.street_name}
                      onChange={handleChange}
                      name="street_name"
                      variant="outlined"
                      placeholder="Eg. 8th Cross Street"
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
                    {errors.street_name && <small className='text-danger mt-2 ms-1'>{errors.street_name}</small>}
                  </div>

                  <div className="mt-3">
                    <p className="business-profile-name">Area</p>
                    <CssTextField
                      value={values.area}
                      onChange={handleChange}
                      name="area"
                      variant="outlined"
                      placeholder="Eg. Near Kalyan Nagar post"
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
                    {errors.area && <small className='text-danger mt-2 ms-1'>{errors.area}</small>}
                  </div>

                  <div className="mt-3">
                    <p className="business-profile-name">City</p>
                    <CssTextField
                      value={values.city}
                      onChange={handleChange}
                      name="city"
                      variant="outlined"
                      placeholder="Eg. Bangalore"
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
                    {errors.city && <small className='text-danger mt-2 ms-1'>{errors.city}</small>}
                  </div>

                  <div className="mt-3">
                    <p className="business-profile-name">Pin Code</p>
                    <CssTextField
                      value={values.pincode}
                      onChange={handleChange}
                      name="pincode"
                      variant="outlined"
                      placeholder="Eg. 624 301"
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
                    {errors.pincode && <small className='text-danger mt-2 ms-1'>{errors.pincode}</small>}
                  </div>


                </Grid>
              </Grid>


              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={8} >
                  <div className="mt-5">
                    <p className="business-profile-name">About</p>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <textarea value={values.about_description}
                        onChange={handleChange}
                        name="about_description" rows="20" id="comment_text" cols="40"
                        className="job-textarea" autoComplete="off" role="textbox"
                        aria-autocomplete="list" aria-haspopup="true"></textarea>
                    </Box>
                    {errors.about_description && <small className='text-danger mt-2 ms-1'>{errors.about_description}</small>}
                  </div>
                </Grid>
              </Grid>


              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={8} >
                  <div className="mt-3">
                    <p className="business-profile-name">Working Since</p>
                    <CssTextField
                      value={values.working_since}
                      type="date"
                      onChange={handleChange}
                      name="working_since"
                      variant="outlined"
                      placeholder="Enter Your Catering Service Name"
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
                    /> {errors.working_since && <small className='text-danger mt-2 ms-1'>{errors.working_since}</small>}
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
                      value={values.business_email}
                      onChange={handleChange}
                      name="business_email"
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
                      value={values.business_phone_number}
                      onChange={handleChange}
                      placeholder="Eg:- +91-9000000000"
                      name="business_phone_number"
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
                      value={values.landline_number}
                      onChange={handleChange}
                      name="landline_number"
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
                      value={values.whatsapp_business_phone_number}
                      onChange={handleChange}
                      placeholder="Eg:- +91-9000000000"
                      name="whatsapp_business_phone_number"
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
                      value={values.website_link}
                      onChange={handleChange}
                      name="website_link"
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
                      value={values.twitter_id}
                      onChange={handleChange}
                      name="twitter_id"
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
                      value={values.instagram_link}
                      onChange={handleChange}
                      name="instagram_link"
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
                      value={values.facebook_link}
                      onChange={handleChange}
                      name="facebook_link"
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
                <Button type="submit" variant="contained" className="inquiries-red-btn" disabled={loading}>
                  {loading ? 'Loading...' : 'Update'}  </Button>
              </Stack>




            </form>
          )}
        </Formik>
      </Container>
    </>
  )
}

export default BusinesssProfile