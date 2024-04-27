import { Outlet, useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import LeftNav from "../components/nav/LeftNav";
import { useEffect } from "react";
// import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { api, BASE_URL } from "../api/apiConfig";
import { setAccessToken } from "../features/user/userSlice";
import toast from "react-hot-toast";
import { datavalidationerror, successToast } from "../utils";


const Layout = () => {
  const { accessToken, refreshToken } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    if (!accessToken) {
      navigate('/create-account')
    }
  }, [accessToken])

  // const getTimeUntil = (timestamp) => {
  //   const currentTimestamp = Math.floor(Date.now() / 1000);
  //   if (timestamp > currentTimestamp) {
  //     const differenceInSeconds = timestamp - currentTimestamp;
  //     const hours = Math.floor(differenceInSeconds / 3600);
  //     const minutes = Math.floor((differenceInSeconds % 3600) / 60);
  //     const seconds = differenceInSeconds % 60;
  //     return `${hours} hours, ${minutes} minutes, ${seconds} seconds left until given timestamp`;
  //   } else {
  //     return "Given timestamp is in the past";
  //   }
  // };


  const checkTokenExpiration = async () => {
    // const accessTokenExp = getExpirationTime(accessToken);
    // const refreshTokenExp = getExpirationTime(refreshToken);

    // console.log(getTimeUntil(accessTokenExp), "accessTokenExp");
    // console.log(getTimeUntil(refreshTokenExp), "refreshTokenExp");

    console.log("check");

    try {
      const response = await api.post(`${BASE_URL}/token-refresh`, {}, {
        headers: {
          Authorization: `Bearer ${refreshToken} ${accessToken}`,
        }
      });
      if (response.status === 200) {
        console.log("one", "one");
        dispatch(setAccessToken(response.data.accessToken));
      } else {
        console.log("Two", "Two");
        navigate('/create-account');
      }
    } catch (error) {
      console.log(error);
      toast.error(datavalidationerror(error))
    }
  }


  useEffect(() => {
    checkTokenExpiration();
    const interval = setInterval(checkTokenExpiration, 45 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);


  // const getExpirationTime = (token) => {
  //   if (!token) return null;
  //   const decodedToken = jwtDecode(token);
  //   return decodedToken.exp;
  // }

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