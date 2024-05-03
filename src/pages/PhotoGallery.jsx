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
import useFetchPhotoGallery from "../hooks/useFetchPhotoGallery";

let nextId = 5;
let servicePhotosId = 7;
let otherPhotosId = 7;


// Create a date object representing the last modified date
// const createDummyFile = () => {
//   const date = new Date("2024-04-26");
//   const fileWithDetails = new File(["Dummy content"], "06.png", {
//     type: "image/png",
//     lastModified: date.getTime(),
//   });
//   return fileWithDetails;
// }


const PhotoGallery = () => {
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

  const { isLoading } = useSelector((state) => state.user);

  // const [gallery, setGallery] = useState([])
  const {
    gallery,

    // brand Logo
    onUploadBrandLogo,
    onReUploadBrandLogo,
    onHandleRemoveBrandLogo,

    // banner Logo
    onUploadBannerLogo,
    onReUploadBannerLogo,
    onHandleRemoveBannerLogo,

    // package / Menu 
    onUploadBannerPackageMenu,
    onReUploadPackageMenu,
    onHandleRemovePackageMenu,

    // service 
    onUploadService,
    onReUploadEditService,
    onHandleRemoveService,

    // other photos  
    onUploadOtherPhotos,
    onReUploadEditOtherPhotos,
    onHandleRemoveOtherPhotos,

  } = useFetchPhotoGallery()

  // console.log(gallery, "Gallery");

  return (
    <>
      <TopHeader title="Manage All Photos" description="Edit and Upload your Business photos below" />

      <Container maxWidth="lg">
        <div className='card-box-shadow px-5 py-4 mb-4'>

          {/* Brand Logo  */}
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
                      <img
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
                    onChange={onUploadBrandLogo}
                  />
                  <label htmlFor="contained-button-file">
                    <Button variant="contained" component="span" className="cuisines-list-white-btn" disabled={isLoading}>
                      Upload
                    </Button>
                  </label>
                </>
              )}

              <Button onClick={onHandleRemoveBrandLogo} variant="contained" component="span" className="cuisines-list-white-btn" disabled={isLoading}>
                Delete
              </Button>

            </Stack>
          </div>

          {/* Main Banner Photo  */}
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
              {
                gallery['vendor-banner'] !== undefined ? (
                  <>
                    {gallery['vendor-banner']?.map((logo, index) => (
                      <img
                        key={index}
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

              {gallery['vendor-banner']?.length && gallery['vendor-banner']?.length > 0 ? (
                <>
                  <input
                    accept="image/*"
                    id="onReUploadBannerLogo"
                    multiple
                    type="file"
                    style={{ display: 'none' }}
                    onChange={onReUploadBannerLogo}
                  />
                  <label htmlFor="onReUploadBannerLogo">
                    <Button variant="contained" component="span" className="cuisines-list-white-btn" disabled={isLoading}>
                      {'Re Upload'}
                    </Button>
                  </label>
                </>
              ) : (
                <>
                  <input
                    accept="image/*"
                    id="onUploadBannerLogo"
                    multiple
                    type="file"
                    style={{ display: 'none' }}
                    onChange={onUploadBannerLogo}
                  />
                  <label htmlFor="onUploadBannerLogo">
                    <Button variant="contained" component="span" className="cuisines-list-white-btn" disabled={isLoading}>
                      {'Upload'}
                    </Button>
                  </label>
                </>
              )}


              <Button variant="contained" component="span" className="cuisines-list-white-btn" disabled={isLoading} onClick={onHandleRemoveBannerLogo}>
                {'Delete'}
              </Button>

            </Stack>
          </div>

          {/* Package / Menu Card Photos  */}
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
              {
                gallery['vendor-menu'] !== undefined ? (
                  <>
                    {gallery['vendor-menu'].map((item, index) => (
                      <div className="pg-shadow me-2">
                        <img key={index} src={item?.image_name[0]?.medium} alt={`Package Menu ${index}`} className="img-fluid pg-gallery-img" />
                        <div className="pg-img-icons">
                          <Stack direction="row" justifyContent="space-between" className="py-2 px-2">
                            <>
                              <input
                                accept="image/*"
                                id="onReUploadPackageMenu"
                                multiple
                                type="file"
                                style={{ display: 'none' }}
                                onChange={(e) => onReUploadPackageMenu(e, item)}
                              />
                              <label htmlFor="onReUploadPackageMenu">
                                <span variant="contained" component="span" disabled={isLoading}>
                                  {<EditIcon className="pg-img-icon" />}
                                </span>
                              </label>
                            </>

                            <span variant="contained" component="span" disabled={isLoading} onClick={() => onHandleRemovePackageMenu(item)}>
                              {<DeleteIcon className="pg-img-icon" />}
                            </span>
                          </Stack>
                        </div>
                      </div>
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


              <>
                <input
                  accept="image/*"
                  id="onUploadBannerPackageMenu"
                  multiple
                  type="file"
                  style={{ display: 'none' }}
                  onChange={onUploadBannerPackageMenu}
                />
                <label htmlFor="onUploadBannerPackageMenu">
                  <Button variant="contained" component="span" className="cuisines-list-white-btn" disabled={isLoading}>
                    {<AddIcon />}
                  </Button>
                </label>
              </>

            </Stack>
          </div>

          {/* Service Photos start */}
          <div className="mt-2">
            <p className='cuisines-title text-center'>Service Photos</p>
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
              {
                gallery['vendor-service'] !== undefined ? (
                  <>
                    {gallery['vendor-service'].map((item, index) => (
                      <div className="pg-shadow me-2">
                        <img key={index} src={item?.image_name[0]?.medium} alt={`Package Menu ${index}`} className="img-fluid pg-gallery-img" />
                        <div className="pg-img-icons">
                          <Stack direction="row" justifyContent="space-between" className="py-2 px-2">
                            <>
                              <input
                                accept="image/*"
                                id="onReUploadEditService"
                                multiple
                                type="file"
                                style={{ display: 'none' }}
                                onChange={(e) => onReUploadEditService(e, item)}
                              />
                              <label htmlFor="onReUploadEditService">
                                <span variant="contained" component="span" disabled={isLoading}>
                                  {<EditIcon className="pg-img-icon" />}
                                </span>
                              </label>
                            </>

                            <span variant="contained" component="span" disabled={isLoading} onClick={() => onHandleRemoveService(item)}>
                              {<DeleteIcon className="pg-img-icon" />}
                            </span>
                          </Stack>
                        </div>
                      </div>
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
              <>
                <input
                  accept="image/*"
                  id="onUploadService"
                  multiple
                  type="file"
                  style={{ display: 'none' }}
                  onChange={onUploadService}
                />
                <label htmlFor="onUploadService">
                  <Button variant="contained" component="span" className="cuisines-list-white-btn" disabled={isLoading}>
                    {<AddIcon />}
                  </Button>
                </label>
              </>

            </Stack>
          </div>



          {/* Other Photos */}
          <div className="mt-2">
            <p className='cuisines-title text-center'>Other Photos</p>
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
              {
                gallery['vendor-other'] !== undefined ? (
                  <>
                    {gallery['vendor-other'].map((item, index) => (
                      <div className="pg-shadow me-2">
                        <img key={index} src={item?.image_name[0]?.medium} alt={`Package Menu ${index}`} className="img-fluid pg-gallery-img" />
                        <div className="pg-img-icons">
                          <Stack direction="row" justifyContent="space-between" className="py-2 px-2">
                            <>
                              <input
                                accept="image/*"
                                id="onReUploadEditOtherPhotos"
                                multiple
                                type="file"
                                style={{ display: 'none' }}
                                onChange={(e) => onReUploadEditOtherPhotos(e, item)}
                              />
                              <label htmlFor="onReUploadEditOtherPhotos">
                                <span variant="contained" component="span" disabled={isLoading}>
                                  {<EditIcon className="pg-img-icon" />}
                                </span>
                              </label>
                            </>

                            <span variant="contained" component="span" disabled={isLoading} onClick={() => onHandleRemoveOtherPhotos(item)}>
                              {<DeleteIcon className="pg-img-icon" />}
                            </span>
                          </Stack>
                        </div>
                      </div>
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
              <>
                <input
                  accept="image/*"
                  id="onUploadOtherPhotos"
                  multiple
                  type="file"
                  style={{ display: 'none' }}
                  onChange={onUploadOtherPhotos}
                />
                <label htmlFor="onUploadOtherPhotos">
                  <Button variant="contained" component="span" className="cuisines-list-white-btn" disabled={isLoading}>
                    {<AddIcon />}
                  </Button>
                </label>
              </>

            </Stack>
          </div>


        </div>
      </Container>
    </>
  )
}

export default PhotoGallery