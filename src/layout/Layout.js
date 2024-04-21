import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
import LeftNav from "../components/nav/LeftNav";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useSelector } from "react-redux";
import { api, BASE_URL } from "../api/apiConfig";


const Layout = () => {
  const { accessToken, refreshToken } = useSelector((state) => state.user.accessToken);
  console.log(`${refreshToken} ${accessToken}`, 'refreshToken');

 
  


  // useEffect(() => {
  //   const checkTokenExpiration = async () => {
  //     const accessTokenExp = getExpirationTime(accessToken);
  //     const currentTimestamp = Math.floor(Date.now() / 1000);

  //     if (accessTokenExp && accessTokenExp < currentTimestamp) {
  //       try {
  //         const response = await api.post(`${BASE_URL}/refresh-token`, {
  //           headers: {
  //             Authorization: `${refreshToken} ${accessToken}`
  //           }
  //         })
  //         console.log(response, "response");
  //         const { accessToken: newAccessToken } = response.data;
  //         console.log(newAccessToken, "newAccessToken");

  //       } catch (error) {
  //         console.error("Error refreshing token:", error);
  //       }
  //     }
  //   }

  //   checkTokenExpiration()
  // }, [accessToken, refreshToken])

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