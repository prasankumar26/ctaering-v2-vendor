import { Link, NavLink } from "react-router-dom"
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Stack from '@mui/material/Stack';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import Drawer from '@mui/material/Drawer';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded';
import WebAssetRoundedIcon from '@mui/icons-material/WebAssetRounded';
import PhotoLibraryRoundedIcon from '@mui/icons-material/PhotoLibraryRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import StackedBarChartRoundedIcon from '@mui/icons-material/StackedBarChartRounded';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


const leftnav = [
  { "title": "Manage Your Account" },
  { "id": "1", "name": "Dashboard", "icon": <StackedBarChartRoundedIcon className="ln-icon" />, "url": "/" },
  { "id": "2", "name": "inquiries", "icon": <EditNoteIcon className="ln-icon" />, "url": "/dashboard/inquiries" },
  { "id": "3", "name": "reviews", "icon": <AnnouncementIcon className="ln-icon" />, "url": "/dashboard/reviews" },

  { "title": "Services" },
  { "id": "4", "name": "Cuisines", "icon": <RestaurantRoundedIcon className="ln-icon" />, "url": "/cuisines" },
  { "id": "5", "name": "occasions", "icon": <CelebrationRoundedIcon className="ln-icon" />, "url": "/occasions" },
  { "id": "6", "name": "packages", "icon": <WebAssetRoundedIcon className="ln-icon" />, "url": "/packages" },

  { "title": "Profiles" },
  { "id": "7", "name": "business Profile", "icon": <CurrencyRupeeIcon className="ln-icon" />, "url": "/businesss-profile" },
  { "id": "8", "name": "Photo gallery", "icon": <PhotoLibraryRoundedIcon className="ln-icon" />, "url": "/photo-gallery" },
  { "id": "9", "name": "branches", "icon": <BusinessRoundedIcon className="ln-icon" />, "url": "/branches" },

  { "title": "Manage App" },
  { "id": "10", "name": "Subscription", "icon": <BusinessRoundedIcon className="ln-icon" />, "url": "/subscription" },
  { "id": "11", "name": "Settings", "icon": <BusinessRoundedIcon className="ln-icon" />, "url": "/settings" }
];


const LeftNav = () => {
  // const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <div className="nav-bg">
      <div className="red-nav-bg">
        <Stack direction='row' alignItems="center" spacing={2} sx={{ marginBottom: '20px' }}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer} className="mobile-menu">
            <MenuIcon />
          </IconButton>
          <RestaurantMenuIcon className="text-white" />  <h2 className="ln-title">Catering Service</h2>
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" className="mobile-none">
          <Stack direction="row" alignItems="center" spacing={2}>
            <img src="https://dashkit.goodthemes.co/assets/img/avatars/profiles/avatar-1.jpg" alt="" className="nav-avatar" />
            <div>
              <h2 className="m-0 text-white nav-username">Venky D</h2>
              <p className="m-0 text-white nav-gmail">admin@gmail.com</p>
            </div>
          </Stack>
          <Stack>
            <NotificationsNoneIcon className="text-white" />
          </Stack>
        </Stack>
      </div>

      <div className="nav-bottom mobile-none">
        {leftnav.map((item, index) => {
          if (item.title) {
            return <Stack direction="row" sx={{width: '100%'}} className="ps-3 pb-2">
                 <p key={index} className="ln-sub-title">{item.title}</p>
              </Stack>
          } else {
            return (
              <NavLink className="text-white nav-links" to={item.url}>
                <Stack direction="row" alignItems="center" spacing={2} sx={{ width: '100%', margin: '0px', padding: '0px' }}>
                  <span className="left-line"></span> <span>{item.icon} </span> <span className="nav-name">{item.name}</span>
                </Stack>
              </NavLink>
            )
          }
        })}
      </div>

      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer} >
        <div style={{ backgroundColor: '#C33332' }} className="pt-4 ps-2">
        {leftnav.map((item, index) => {
          if (item.title) {
            return <Stack direction="row" sx={{width: '100%'}} className="ps-3 pb-2">
                 <p key={index} className="ln-sub-title">{item.title}</p>
              </Stack>
          } else {
            return (
              <NavLink className="text-white nav-links" to={item.url}>
                <Stack direction="row" alignItems="center" spacing={2} sx={{ width: '100%' }}>
                  <span className="left-line"></span> <span>{item.icon} </span> <span className="nav-name">{item.name}</span>
                </Stack>
              </NavLink>
            )
          }
        })}
        </div>
      </Drawer>
    </div>
  )
}

export default LeftNav
