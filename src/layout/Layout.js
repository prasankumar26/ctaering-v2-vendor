import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
import LeftNav from "../components/nav/LeftNav";

const Layout = () => {
  return (
    <>
      <Grid container spacing={0} >
        <Grid item xs={12} sm={12} md={12} lg={2.5}>
          <LeftNav />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={9.5}>
          <Outlet />
        </Grid>
      </Grid>
    </>
  )
};

export default Layout;