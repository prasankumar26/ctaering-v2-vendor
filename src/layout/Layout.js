import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
import LeftNav from "../components/nav/LeftNav";
import TopHeader from "../components/global/TopHeader";

const Layout = () => {
  return (
    <>
      <div className="dashboard-container">
        <Grid container spacing={0} >
          <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
            <LeftNav />

          </Grid>
          <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
            <div className="outlet-container mx-5">
              <Outlet />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
};

export default Layout;