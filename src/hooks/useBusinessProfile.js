import React, { useEffect, useState } from 'react'
import { api, BASE_URL, createAuthorizedInstance } from '../api/apiConfig'
// import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import toast from 'react-hot-toast';

const useBusinessProfile = (url, accessToken) => {
    const [data, setData] = useState(null)

    const fetchBusinessProfile = async () => {
        try {
            const response = await axios.get(url, {

                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            setData(response.data.data[0])
            // toast.success(response?.data?.message);
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message)
        }
    }

    const updateBusinessProfile = async (updateData) => {
        try {
            const response = await api.post(`${BASE_URL}/update-vendor-business-profile-detailed`, updateData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            })
            toast.success(response?.data?.message);
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message)
        }
    }


    useEffect(() => {
        if (accessToken) {
            fetchBusinessProfile();
        }
    }, [accessToken, url]);


    return [data, updateBusinessProfile]
}

export default useBusinessProfile