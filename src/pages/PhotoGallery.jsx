import TopHeader from "../components/global/TopHeader"
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import { api, BASE_URL } from "../api/apiConfig";
import { useSelector } from "react-redux";
import { datavalidationerror, successToast } from "../utils";
import toast from "react-hot-toast";

let nextId = 5;
let servicePhotosId = 7;
let otherPhotosId = 7;


// Create a date object representing the last modified date
const createDummyFile = () => {
  const date = new Date("2024-04-26");
  const fileWithDetails = new File(["Dummy content"], "06.png", {
    type: "image/png",
    lastModified: date.getTime(),
  });
  return fileWithDetails;
}


const PhotoGallery = () => {
  const { accessToken } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([
    {
      id: 1,
      url: 'https://img.freepik.com/premium-photo/mountain-landscape-with-sunset-background_726745-519.jpg'
    },
    {
      id: 2,
      url: 'https://img.freepik.com/premium-photo/mountain-landscape-with-sunset-background_726745-519.jpg'
    },
    {
      id: 3,
      url: 'https://img.freepik.com/premium-photo/mountain-landscape-with-sunset-background_726745-519.jpg'
    },
    {
      id: 4,
      url: 'https://img.freepik.com/premium-photo/mountain-landscape-with-sunset-background_726745-519.jpg'
    }
  ])

  const [servicePhotos, setServicePhotos] = useState([
    {
      id: 1,
      url: 'https://img.freepik.com/premium-photo/mountain-landscape-with-sunset-background_726745-519.jpg'
    },
    {
      id: 2,
      url: 'https://img.freepik.com/premium-photo/mountain-landscape-with-sunset-background_726745-519.jpg'
    },
    {
      id: 3,
      url: 'https://img.freepik.com/premium-photo/mountain-landscape-with-sunset-background_726745-519.jpg'
    },
    {
      id: 4,
      url: 'https://img.freepik.com/premium-photo/mountain-landscape-with-sunset-background_726745-519.jpg'
    },
    {
      id: 5,
      url: 'https://img.freepik.com/premium-photo/mountain-landscape-with-sunset-background_726745-519.jpg'
    },
    {
      id: 6,
      url: 'https://img.freepik.com/premium-photo/mountain-landscape-with-sunset-background_726745-519.jpg'
    },
  ])

  const [otherPhotos, setOtherPhotos] = useState([
    {
      id: 1,
      url: 'https://img.freepik.com/premium-photo/mountain-landscape-with-sunset-background_726745-519.jpg'
    },
    {
      id: 2,
      url: 'https://img.freepik.com/premium-photo/mountain-landscape-with-sunset-background_726745-519.jpg'
    },
    {
      id: 3,
      url: 'https://img.freepik.com/premium-photo/mountain-landscape-with-sunset-background_726745-519.jpg'
    },
    {
      id: 4,
      url: 'https://img.freepik.com/premium-photo/mountain-landscape-with-sunset-background_726745-519.jpg'
    },
    {
      id: 5,
      url: 'https://img.freepik.com/premium-photo/mountain-landscape-with-sunset-background_726745-519.jpg'
    },
    {
      id: 6,
      url: 'https://img.freepik.com/premium-photo/mountain-landscape-with-sunset-background_726745-519.jpg'
    },
  ])

  const [brandLogo, setBrandlogo] = useState(null);
  // const [brandLogoData, setBrandlogoData] = useState(null);
  const [gallery, setGallery] = useState([])


  // get vendor images 
  const getVendorImages = async () => {
    setLoading(true)
    try {
      const response = await api.get(`${BASE_URL}/get-vendor-gallery-images`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      setGallery(response?.data?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getVendorImages()
  }, [])


  const onUploadBrandLogo = async (event) => {
    const formData = new FormData();
    formData.append('id', '');
    formData.append('image', event.target.files[0]);
    formData.append('action_type', 'insert')

    setLoading(true)
    try {
      const response = await api.post(`${BASE_URL}/upload-vendor-brand-logo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setBrandlogo(response.data.data.image);
      getVendorImages();
      toast.success(successToast(response))
    } catch (error) {
      console.log(error);
      toast.error(datavalidationerror(error))
    } finally {
      setLoading(false)
    }
  }

  const onReUploadBrandLogo = async (event) => {
    const formData = new FormData();
    formData.append('id', parseInt(gallery['vendor-brand-logo'][0]?.id && gallery['vendor-brand-logo'][0]?.id));
    formData.append('image', event.target.files[0]);
    formData.append('action_type', 'replace')

    setLoading(true)
    try {
      const response = await api.post(`${BASE_URL}/upload-vendor-brand-logo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      });
      getVendorImages();
      toast.success(successToast(response))
    } catch (error) {
      console.log(error);
      toast.error(datavalidationerror(error))
    } finally {
      setLoading(false)
    }
  }

  const onHandleRemoveBrandLogo = async (event) => {
    const formData = new FormData();
    formData.append('id', parseInt(gallery['vendor-brand-logo'][0]?.id && gallery['vendor-brand-logo'][0]?.id));
    formData.append('image', event.target.files[0]);
    formData.append('action_type', 'remove')

    setLoading(true)
    try {
      const response = await api.post(`${BASE_URL}/upload-vendor-brand-logo`, formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      getVendorImages();
      setBrandlogo(null);
      toast.success(successToast(response));
    } catch (error) {
      console.log(error);
      toast.error(datavalidationerror(error));
    } finally {
      setLoading(false)
    }
  }

  // console.log(brandLogoData?.image_name[0]?.medium, "111111");
  // console.log(brandLogoData, "gallery?.vendor-banner[0]?.image_name[0]?.original");

  console.log(gallery['vendor-brand-logo'], "gallery gallery");

  return (
    <>
      <TopHeader title="Manage All Photos" description="Edit and Upload your Business photos below" />

      <Container maxWidth="lg">
        <div className='card-box-shadow px-5 py-4 mb-4'>

          <div className="mb-4 mt-2">
            <p className='cuisines-title text-center'>Brand Logo</p>
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




            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
              {
                gallery['vendor-brand-logo'] !== undefined ? (
                  <>
                    {gallery['vendor-brand-logo']?.map((logo, index) => (
                      console.log('Logo:', logo),
                      <img
                        key={index}
                        src={logo?.image_name[0]?.medium || 'https://img.freepik.com/premium-vector/illustration-upload_498740-5719.jpg'}
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



              {gallery['vendor-brand-logo']?.length && gallery['vendor-brand-logo']?.length > 0 ? (
                <>
                  <input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                    style={{ display: 'none' }}
                    onChange={onReUploadBrandLogo}
                  />
                  <label htmlFor="contained-button-file">
                    <Button variant="contained" component="span" className="cuisines-list-white-btn" disabled={loading}>
                      {loading ? 'Loading' : 'Re Upload'}
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
                    onChange={onUploadBrandLogo}
                  />
                  <label htmlFor="contained-button-file">
                    <Button variant="contained" component="span" className="cuisines-list-white-btn" disabled={loading}>
                      {loading ? 'Loading...' : 'Upload'}
                    </Button>
                  </label>
                </>
              )}


              <input
                accept="image/*"
                id="remove-brand-logo"
                multiple
                type="file"
                style={{ display: 'none' }}
                onChange={onHandleRemoveBrandLogo}
                className="cuisines-list-white-btn"
              />
              <label htmlFor="remove-brand-logo">
                <Button variant="contained" component="span" className="cuisines-list-white-btn" disabled={loading}>
                  {loading ? 'Loading...' : 'Delete'}
                </Button>
              </label>

              {/* <Button variant="contained" className="cuisines-list-white-btn" onClick={handleRemoveBrandLogo}> Remove </Button> */}
            </Stack>
          </div>



          <div className="mb-4 mt-5">
            <p className='cuisines-title text-center'>Main Banner Photo</p>
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

            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
              {gallery['vendor-banner']?.map((logo, index) => (
                <img key={index} src={logo?.image_name[0]?.medium} alt={`Brand Logo ${index}`} />
              ))}

              <Button variant="contained" className="cuisines-list-white-btn"> Upload / Re Upload </Button>
              <Button variant="contained" className="cuisines-list-white-btn"> Remove </Button>


            </Stack>
          </div>


          <div className="mt-2">
            <p className='cuisines-title text-center'>Package / Menu Card Photos</p>
            <Divider
              className='mt-2 mb-4'
              variant="middle"
              style={{
                backgroundColor: '#c33332',
                margin: '0px',
                width: '35%',
                margin: '0px auto'
              }}
            />
            <Stack direction="row" justifyContent="start" flexWrap="wrap" alignItems="center" spacing={0}>
              {photos.map((item) => (
                <div className="pg-shadow me-2">
                  <img src={item.url} alt="" className="img-fluid pg-gallery-img" />
                  <div className="pg-img-icons">
                    <Stack direction="row" justifyContent="space-between" className="py-2 px-2">
                      <EditIcon className="pg-img-icon" />
                      <DeleteIcon className="pg-img-icon" />
                    </Stack>
                  </div>
                </div>
              ))}
              <Button variant="contained" className="pg-bg-white" onClick={() => {
                setPhotos([
                  ...photos,
                  {
                    id: nextId++,
                    url: 'https://img.freepik.com/premium-photo/mountain-landscape-with-sunset-background_726745-519.jpg'
                  }
                ])
              }}>
                <AddIcon />
              </Button>

            </Stack>
          </div>


          <div>
            <p className='cuisines-title text-center mt-5'>Service Photos</p>
            <Divider
              className='mt-2 mb-4'
              variant="middle"
              style={{
                backgroundColor: '#c33332',
                margin: '0px',
                width: '35%',
                margin: '0px auto'
              }}
            />
            <Stack direction="row" justifyContent="start" flexWrap="wrap" alignItems="center" spacing={0}>
              {servicePhotos.map((item) => (
                <div className="pg-shadow me-2">
                  <img src={item.url} alt="" className="img-fluid pg-gallery-img" />
                  <div className="pg-img-icons">
                    <Stack direction="row" justifyContent="space-between" className="py-2 px-2">
                      <EditIcon className="pg-img-icon" />
                      <DeleteIcon className="pg-img-icon" />
                    </Stack>
                  </div>
                </div>
              ))}
              <Button variant="contained" className="pg-bg-white" onClick={() => {
                setServicePhotos([
                  ...servicePhotos,
                  {
                    id: servicePhotosId++,
                    url: 'https://img.freepik.com/premium-photo/mountain-landscape-with-sunset-background_726745-519.jpg'
                  }
                ])
              }}>
                <AddIcon />
              </Button>

            </Stack>
          </div>



          <div>
            <p className='cuisines-title text-center mt-5'>Other Photos</p>
            <Divider
              className='mt-2 mb-4'
              variant="middle"
              style={{
                backgroundColor: '#c33332',
                margin: '0px',
                width: '35%',
                margin: '0px auto'
              }}
            />
            <Stack direction="row" justifyContent="start" flexWrap="wrap" alignItems="center" spacing={0}>
              {otherPhotos.map((item) => (
                <div className="pg-shadow me-2">
                  <img src={item.url} alt="" className="img-fluid pg-gallery-img" />
                  <div className="pg-img-icons">
                    <Stack direction="row" justifyContent="space-between" className="py-2 px-2">
                      <EditIcon className="pg-img-icon" />
                      <DeleteIcon className="pg-img-icon" />
                    </Stack>
                  </div>
                </div>
              ))}
              <Button variant="contained" className="pg-bg-white" onClick={() => {
                setOtherPhotos([
                  ...otherPhotos,
                  {
                    id: otherPhotosId++,
                    url: 'https://img.freepik.com/premium-photo/mountain-landscape-with-sunset-background_726745-519.jpg'
                  }
                ])
              }}>
                <AddIcon />
              </Button>

            </Stack>
          </div>


          {/* <Stack direction="row" justifyContent="center" className="mt-4">
            <Button variant="contained" className="inquiries-red-btn"> Update </Button>
          </Stack> */}




        </div>
      </Container>
    </>
  )
}

export default PhotoGallery