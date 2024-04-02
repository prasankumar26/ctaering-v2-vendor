import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setData, setVendorId, setAccessToken } from '../features/user/userSlice';
import toast from 'react-hot-toast';
import { api } from '../api/apiConfig';
import { useNavigate } from 'react-router-dom';

const useRegistration = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // registerVendor 
    const registerVendor = async (registerData, setRegisterData, setShowOtp, setRegister, initialState) => {
        setLoading(true);
        try {
            const response = await api.post('/register-vendor-send-otp', registerData);
            dispatch(setVendorId(response?.data?.data));
            dispatch(setData(registerData));
            setShowOtp(false);
            setLoading(false);
            toast.success(response?.data?.message);
            setRegister(initialState);
        } catch (error) {
            setLoading(false);
            toast.error(error?.response?.data?.message);
        }
    };

    // verifyOtp 
    const verifyOtp = async (otp, user, setOtp, setValue) => {
        const data = {
            phone_number: user?.phone_number,
            otp_code: otp,
            vendor_type: user?.vendor_type
        };
        setLoading(true);
        try {
            const response = await api.post('/register-vendor-verify-otp', data);
            dispatch(setAccessToken(response?.data?.data));
            navigate('/enter-location')
            toast.success(response?.data?.message);
            setLoading(false);
            setOtp(['', '', '', '', '', '']);
        } catch (error) {
            setLoading(false);
            toast.error(error?.response?.data?.message);
        }
    };


    // Resend otp 
    const resendOtp = async (user) => {
        try {
         const data = {
             phone_number: user?.phone_number,
             vendor_type: user?.vendor_type
         }
          const response = await api.post('register-vendor-resend-otp', data)
           toast.success(response?.data?.message);
        } catch (error) {
         console.log(error);
         toast.error(error?.response?.data?.message);
        }
     }

    return { loading, registerVendor, verifyOtp, resendOtp };
};

export default useRegistration;