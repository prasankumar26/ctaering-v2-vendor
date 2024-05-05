import { Outlet, useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import LeftNav from "../components/nav/LeftNav";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api, BASE_URL } from "../api/apiConfig";
import { setAccessToken, setRefreshToken } from "../features/user/userSlice";
import toast from "react-hot-toast";
import { datavalidationerror, successToast } from "../utils";
import { jwtDecode } from "jwt-decode";
import { useTokenInterceptor } from "../hooks/useTokenInterceptor";

const Layout = () => {
  const { accessToken, refreshToken } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

console.log(refreshToken,"refreshToken");
  useTokenInterceptor();



  const test = async () => {
    try {
      const refreshResponse = await api.post(`${BASE_URL}/token-refresh`, {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        }
      });
      console.log(refreshResponse, "refreshResponse");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    test()
  }, [])

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
