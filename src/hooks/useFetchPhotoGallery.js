import React, { useEffect, useState } from 'react'
import { api, BASE_URL } from '../api/apiConfig';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { datavalidationerror, successToast } from '../utils';
import { setIsLoading } from '../features/user/userSlice';

const useFetchPhotoGallery = () => {
    const [gallery, setGallery] = useState([]);
    const [settings, setSettings] = useState([]);
    const [loading, setLoading] = useState(false)
    const { accessToken } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    // get vendor images 
    const getVendorImages = async () => {
        dispatch(setIsLoading(true))
        try {
            const response = await api.get(`${BASE_URL}/get-vendor-gallery-images`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            setGallery(response?.data?.data || []);
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(setIsLoading(false))
        }
    }

    useEffect(() => {
        getVendorImages()
    }, [])

    // get-vendor-settings-info
    const getVendorSettingsImages = async () => {
        dispatch(setIsLoading(true))
        try {
            const response = await api.get(`${BASE_URL}/get-vendor-settings-info`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            setSettings(response?.data?.data || []);
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(setIsLoading(false))
        }
    }

    useEffect(() => {
        getVendorSettingsImages()
    }, [])


    // Brand Logo 
    const onUploadBrandLogo = async (event) => {
        const formData = new FormData();
        formData.append('id', '');
        formData.append('image', event.target.files[0]);
        formData.append('action_type', 'insert')

        dispatch(setIsLoading(true))
        try {
            toast.loading('Uploading brand logo...');
            const response = await api.post(`${BASE_URL}/upload-vendor-brand-logo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            getVendorImages();
            toast.success(successToast(response))
        } catch (error) {
            console.log(error);
            toast.error(datavalidationerror(error))
        } finally {
            dispatch(setIsLoading(false))
            toast.dismiss();
        }
    }

    const onReUploadBrandLogo = async (event) => {
        const formData = new FormData();
        formData.append('id', parseInt(gallery['vendor-brand-logo'][0]?.id && gallery['vendor-brand-logo'][0]?.id));
        formData.append('image', event.target.files[0]);
        formData.append('action_type', 'replace')

        dispatch(setIsLoading(true))
        try {
            toast.loading('Re Uploading brand logo...');
            const response = await api.post(`${BASE_URL}/upload-vendor-brand-logo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            getVendorImages();
            toast.success(successToast(response))
        } catch (error) {
            console.log(error);
            toast.error(datavalidationerror(error))
        } finally {
            toast.dismiss();
            dispatch(setIsLoading(false))
        }
    }

    const onHandleRemoveBrandLogo = async () => {
        const formData = new FormData();
        formData.append('id', parseInt(gallery['vendor-brand-logo'][0]?.id && gallery['vendor-brand-logo'][0]?.id));
        formData.append('action_type', 'remove')

        dispatch(setIsLoading(true))
        try {
            toast.loading('Removing brand logo...');
            const response = await api.post(`${BASE_URL}/upload-vendor-brand-logo`, formData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            getVendorImages();
            toast.success(successToast(response));
        } catch (error) {
            console.log(error);
            toast.error(datavalidationerror(error));
        } finally {
            dispatch(setIsLoading(false))
            toast.dismiss();
        }
    }

    // Banner Image 
    const onUploadBannerLogo = async (event) => {
        const formData = new FormData();
        formData.append('id', '');
        formData.append('image', event.target.files[0]);
        formData.append('action_type', 'insert')

        dispatch(setIsLoading(true))
        try {
            toast.loading('Uploading Banner logo...');
            const response = await api.post(`${BASE_URL}/upload-vendor-banner-image`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            getVendorImages();
            toast.success(successToast(response))
        } catch (error) {
            console.log(error);
            toast.error(datavalidationerror(error))
        } finally {
            dispatch(setIsLoading(false))
            toast.dismiss();
        }
    }

    const onReUploadBannerLogo = async (event) => {
        const formData = new FormData();
        formData.append('id', parseInt(gallery['vendor-banner'][0]?.id && gallery['vendor-banner'][0]?.id));
        formData.append('image', event.target.files[0]);
        formData.append('action_type', 'replace')

        dispatch(setIsLoading(true))
        try {
            toast.loading('Re Uploading Banner logo...');
            const response = await api.post(`${BASE_URL}/upload-vendor-banner-image`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            getVendorImages();
            toast.success(successToast(response))
        } catch (error) {
            console.log(error);
            toast.error(datavalidationerror(error))
        } finally {
            dispatch(setIsLoading(false))
            toast.dismiss();
        }
    }

    const onHandleRemoveBannerLogo = async () => {
        const formData = new FormData();
        formData.append('id', parseInt(gallery['vendor-banner'][0]?.id && gallery['vendor-banner'][0]?.id));
        formData.append('action_type', 'remove')

        dispatch(setIsLoading(true))
        try {
            toast.loading('Removing Banner logo...');
            const response = await api.post(`${BASE_URL}/upload-vendor-banner-image`, formData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            getVendorImages();
            toast.success(successToast(response));
        } catch (error) {
            console.log(error);
            toast.error(datavalidationerror(error));
        } finally {
            dispatch(setIsLoading(false))
            toast.dismiss();
        }
    }

    // Package / Menu 
    const onUploadBannerPackageMenu = async (event) => {
        const formData = new FormData();
        formData.append('id', '');
        formData.append('image', event.target.files[0]);
        formData.append('action_type', 'insert')

        dispatch(setIsLoading(true))
        try {
            toast.loading('Uploading Image...');
            const response = await api.post(`${BASE_URL}/upload-vendor-menu-image`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            getVendorImages();
            toast.success(successToast(response))
        } catch (error) {
            console.log(error);
            toast.error(datavalidationerror(error))
        } finally {
            dispatch(setIsLoading(false))
            toast.dismiss();
        }
    }

    const onReUploadPackageMenu = async (event, item) => {
        console.log(event, item, "event, item");
        const formData = new FormData();
        formData.append('id', parseInt(item?.id && item?.id));
        formData.append('image', event.target.files[0]);
        formData.append('action_type', 'replace')

        dispatch(setIsLoading(true))
        try {
            toast.loading('Uploading Image...');
            const response = await api.post(`${BASE_URL}/upload-vendor-menu-image`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            getVendorImages();
            toast.success(successToast(response))
        } catch (error) {
            console.log(error);
            toast.error(datavalidationerror(error))
        } finally {
            dispatch(setIsLoading(false))
            toast.dismiss();
        }
    }

    const onHandleRemovePackageMenu = async (item) => {
        const formData = new FormData();
        formData.append('id', parseInt(item?.id && item?.id));
        formData.append('action_type', 'remove')

        dispatch(setIsLoading(true))
        try {
            toast.loading('Removing Image...');
            const response = await api.post(`${BASE_URL}/upload-vendor-menu-image`, formData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            toast.success(successToast(response));
            getVendorImages();
        } catch (error) {
            console.log(error);
            toast.error(datavalidationerror(error));
        } finally {
            dispatch(setIsLoading(false))
            toast.dismiss();
        }
    }

    // other service 
    const onUploadService = async (event) => {
        const formData = new FormData();
        formData.append('id', '');
        formData.append('image', event.target.files[0]);
        formData.append('action_type', 'insert')

        dispatch(setIsLoading(true))
        try {
            toast.loading('Uploading Image...');
            const response = await api.post(`${BASE_URL}/upload-vendor-service-image`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            getVendorImages();
            toast.success(successToast(response))
        } catch (error) {
            console.log(error);
            toast.error(datavalidationerror(error))
        } finally {
            dispatch(setIsLoading(false))
            toast.dismiss();
        }
    }

    const onReUploadEditService = async (event, item) => {
        const formData = new FormData();
        formData.append('id', parseInt(item?.id && item?.id));
        formData.append('image', event.target.files[0]);
        formData.append('action_type', 'replace')

        dispatch(setIsLoading(true))
        try {
            toast.loading('Uploading Image...');
            const response = await api.post(`${BASE_URL}/upload-vendor-service-image`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            getVendorImages();
            toast.success(successToast(response))
        } catch (error) {
            console.log(error);
            toast.error(datavalidationerror(error))
        } finally {
            dispatch(setIsLoading(false))
            toast.dismiss();
        }
    }

    const onHandleRemoveService = async (item) => {
        const formData = new FormData();
        formData.append('id', parseInt(item?.id && item?.id));
        formData.append('action_type', 'remove')

        dispatch(setIsLoading(true))
        try {
            toast.loading('Removing Image...');
            const response = await api.post(`${BASE_URL}/upload-vendor-service-image`, formData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            toast.success(successToast(response));
            getVendorImages();
        } catch (error) {
            console.log(error);
            toast.error(datavalidationerror(error));
        } finally {
            dispatch(setIsLoading(false))
            toast.dismiss();
        }
    }

    // other photos 
    const onUploadOtherPhotos = async (event) => {
        const formData = new FormData();
        formData.append('id', '');
        formData.append('image', event.target.files[0]);
        formData.append('action_type', 'insert')

        dispatch(setIsLoading(true))
        try {
            toast.loading('Uploading Image...');
            const response = await api.post(`${BASE_URL}/upload-vendor-other-image`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            getVendorImages();
            toast.success(successToast(response))
        } catch (error) {
            console.log(error);
            toast.error(datavalidationerror(error))
        } finally {
            dispatch(setIsLoading(false))
            toast.dismiss();
        }
    }

    const onReUploadEditOtherPhotos = async (event, item) => {
        const formData = new FormData();
        formData.append('id', parseInt(item?.id && item?.id));
        formData.append('image', event.target.files[0]);
        formData.append('action_type', 'replace')

        dispatch(setIsLoading(true))
        try {
            toast.loading('Uploading Image...');
            const response = await api.post(`${BASE_URL}/upload-vendor-other-image`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            getVendorImages();
            toast.success(successToast(response))
        } catch (error) {
            console.log(error);
            toast.error(datavalidationerror(error))
        } finally {
            dispatch(setIsLoading(false))
            toast.dismiss();
        }
    }

    const onHandleRemoveOtherPhotos = async (item) => {
        const formData = new FormData();
        formData.append('id', parseInt(item?.id && item?.id));
        formData.append('action_type', 'remove')

        dispatch(setIsLoading(true))
        try {
            toast.loading('Removing Image...');
            const response = await api.post(`${BASE_URL}/upload-vendor-other-image`, formData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            toast.success(successToast(response));
            getVendorImages();
        } catch (error) {
            console.log(error);
            toast.error(datavalidationerror(error));
        } finally {
            dispatch(setIsLoading(false))
            toast.dismiss();
        }
    }

    // Aadhar card 
    const onUploadAdharCard = async (event) => {
        const formData = new FormData();
        formData.append('id', '');
        formData.append('image', event.target.files[0]);
        formData.append('action_type', 'insert')

        dispatch(setIsLoading(true))
        try {
            toast.loading('Uploading Image...');
            const response = await api.post(`${BASE_URL}/upload-vendor-enca`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            getVendorSettingsImages();
            toast.success(successToast(response))
        } catch (error) {
            console.log(error);
            toast.error(datavalidationerror(error))
        } finally {
            dispatch(setIsLoading(false))
            toast.dismiss();
        }
    }

    const onReUploadAdharCard = async (event) => {
        const formData = new FormData();
        formData.append('id', parseInt(settings['vendor-enca'][0]?.id && settings['vendor-enca'][0]?.id));
        formData.append('image', event.target.files[0]);
        formData.append('action_type', 'replace')

        dispatch(setIsLoading(true))
        try {
            toast.loading('Uploading Image...');
            const response = await api.post(`${BASE_URL}/upload-vendor-enca`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            getVendorSettingsImages();
            toast.success(successToast(response))
        } catch (error) {
            console.log(error);
            toast.error(datavalidationerror(error))
        } finally {
            dispatch(setIsLoading(false))
            toast.dismiss();
        }
    }


    // Pan Card 
    const onUploadPancard = async (event) => {
        const formData = new FormData();
        formData.append('id', '');
        formData.append('image', event.target.files[0]);
        formData.append('action_type', 'insert')

        dispatch(setIsLoading(true))
        try {
            toast.loading('Removing Image...');
            const response = await api.post(`${BASE_URL}/upload-vendor-encp`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            getVendorSettingsImages();
            toast.success(successToast(response))
        } catch (error) {
            console.log(error);
            toast.error(datavalidationerror(error))
        } finally {
            dispatch(setIsLoading(false))
            toast.dismiss();
        }
    }

    const onReUploadPancard = async (event) => {
        const formData = new FormData();
        formData.append('id', parseInt(settings['vendor-encp'][0]?.id && settings['vendor-encp'][0]?.id));
        formData.append('image', event.target.files[0]);
        formData.append('action_type', 'replace')

        dispatch(setIsLoading(true))
        try {
            toast.loading('Uploading Image...');
            const response = await api.post(`${BASE_URL}/upload-vendor-encp`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            getVendorSettingsImages();
            toast.success(successToast(response))
        } catch (error) {
            console.log(error);
            toast.error(datavalidationerror(error))
        } finally {
            dispatch(setIsLoading(false))
            toast.dismiss();
        }
    }


    // fssai Licence
    const onUploadFssai = async (event) => {
        const formData = new FormData();
        formData.append('id', '');
        formData.append('image', event.target.files[0]);
        formData.append('action_type', 'insert')

        dispatch(setIsLoading(true))
        try {
            toast.loading('Uploading Image...');
            const response = await api.post(`${BASE_URL}/upload-vendor-encf`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            getVendorSettingsImages();
            toast.success(successToast(response))
        } catch (error) {
            console.log(error);
            toast.error(datavalidationerror(error))
        } finally {
            dispatch(setIsLoading(false))
            toast.dismiss();
        }
    }

    const onReUploadFssai = async (event) => {
        const formData = new FormData();
        formData.append('id', parseInt(settings['vendor-encf'][0]?.id && settings['vendor-encf'][0]?.id));
        formData.append('image', event.target.files[0]);
        formData.append('action_type', 'replace')

        dispatch(setIsLoading(true))
        try {
            toast.loading('Uploading Image...');
            const response = await api.post(`${BASE_URL}/upload-vendor-encf`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            getVendorSettingsImages();
            toast.success(successToast(response))
        } catch (error) {
            console.log(error);
            toast.error(datavalidationerror(error))
        } finally {
            dispatch(setIsLoading(false))
            toast.dismiss();
        }
    }





    return {
        gallery,
        settings,
        loading,

        // Brand Logo 
        onUploadBrandLogo,
        onReUploadBrandLogo,
        onHandleRemoveBrandLogo,

        // banner Logo
        onUploadBannerLogo,
        onReUploadBannerLogo,
        onHandleRemoveBannerLogo,

        // Package / Menu 
        onUploadBannerPackageMenu,
        onReUploadPackageMenu,
        onHandleRemovePackageMenu,

        // other service 
        onUploadService,
        onReUploadEditService,
        onHandleRemoveService,

        // other photos 
        onUploadOtherPhotos,
        onReUploadEditOtherPhotos,
        onHandleRemoveOtherPhotos,

        // Aadhar Card 
        onUploadAdharCard,
        onReUploadAdharCard,

        // Pan card
        onUploadPancard,
        onReUploadPancard,

        // Fssai Licence
        onUploadFssai,
        onReUploadFssai

    }
}

export default useFetchPhotoGallery