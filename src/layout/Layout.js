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

const Layout = () => {
  const { accessToken, refreshToken } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const checkTokenExpiration = async () => {
      try {
        // Decode the access token to get its expiration time
        const accessTokenExp = jwtDecode(accessToken).exp;
        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
        
        console.log(accessTokenExp < currentTime, "accessTokenExp < currentTime");

        // If access token has expired
        if (accessTokenExp < currentTime) {
          // Check if refresh token is still valid
          const refreshTokenExp = jwtDecode(refreshToken).exp;
          if (refreshTokenExp < currentTime) {
            // Refresh token has expired, navigate to create account
            navigate("/create-account");
          } else {
            // Call token refresh API
            const response = await api.post(`${BASE_URL}/token-refresh`, {}, {
              headers: {
                Authorization: `Bearer ${refreshToken}`,
              }
            });
            // Update access token in the state
            dispatch(setAccessToken(response.data.accessToken));
            toast.success(successToast(response))
          }
        }
      } catch (error) {
        console.error("Error checking token expiration:", error);
        // Handle error (e.g., show toast message)
        toast.error("An error occurred while checking token expiration.");
        toast.error(datavalidationerror(error))
      }
    };

    // Run the token expiration check every minute (adjust interval as needed)
    const interval = setInterval(checkTokenExpiration, 60000);

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(interval);
  }, [accessToken, refreshToken, navigate, dispatch]);

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
