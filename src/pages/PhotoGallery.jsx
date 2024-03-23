import TopHeader from "../components/global/TopHeader"
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";

let nextId = 5;
let servicePhotosId = 7;
let otherPhotosId = 7;

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
              <img src="https://img.freepik.com/premium-photo/mountain-landscape-with-sunset-background_726745-519.jpg" alt=""
                className="img-fluid pg-gallery-img-big" />

              <Button variant="contained" className="cuisines-list-white-btn"> Upload / Re Upload </Button>
              <Button variant="contained" className="cuisines-list-white-btn"> Remove </Button>


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
              <img src="https://img.freepik.com/premium-photo/mountain-landscape-with-sunset-background_726745-519.jpg" alt=""
                className="img-fluid pg-gallery-img-big" />

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