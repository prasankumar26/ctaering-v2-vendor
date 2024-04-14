import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setData, setVendorId, setAccessToken, setLoginUserData } from '../features/user/userSlice';
import toast from 'react-hot-toast';
import { api } from '../api/apiConfig';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // registerVendor 
    const loginVendor = async (loginData, setShowOtp) => {
        setLoading(true);
        try {
            const response = await api.post('/login-vendor-send-otp', loginData);
            console.log(response, "response");
            dispatch(setLoginUserData(loginData));
            setShowOtp(false);
            setLoading(false);
            toast.success(response?.data?.message);
        } catch (error) {
            setLoading(false);
            toast.error(error?.response?.data?.message);
        }
    };

    // verifyOtp 
    const verifyOtp = async (otp, loginUserData, setOtp, setValue) => {
        const data = {
            otp_code: otp,
            company_id: loginUserData?.company_id
        };
        setLoading(true);
        try {
            const response = await api.post('/login-vendor-verify-otp', data);
            dispatch(setAccessToken(response?.data?.data));
            navigate('/profile-steps')
            toast.success(response?.data?.message);
            setLoading(false);
            setOtp(['', '', '', '', '', '']);
        } catch (error) {
            setLoading(false);
            toast.error(error?.response?.data?.message);
        }
    };


    // Resend otp 
    const resendOtp = async (loginUserData) => {
        try {
            const data = {
                company_id: loginUserData?.company_id,
                password: loginUserData?.password
            }
            const response = await api.post('/login-vendor-resend-otp', data)
            toast.success(response?.data?.message);
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message);
        }
    }

    return { loading, loginVendor, verifyOtp, resendOtp };
};

export default useLogin;
