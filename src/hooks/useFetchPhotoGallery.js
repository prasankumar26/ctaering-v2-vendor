import React, { useEffect, useState } from 'react'
import { api, BASE_URL } from '../api/apiConfig';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { datavalidationerror, successToast } from '../utils';

const useFetchPhotoGallery = () => {
    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(false)
    const { accessToken } = useSelector((state) => state.user);

    // get vendor images 
    const getVendorImages = async () => {
        setLoading(true)
        try {
            const response = await api.get(`${BASE_URL}/get-vendor-gallery-images`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            setGallery(response?.data?.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getVendorImages()
    }, [])


    // Brand Logo 
    const onUploadBrandLogo = async (event) => {
        const formData = new FormData();
        formData.append('id', '');
        formData.append('image', event.target.files[0]);
        formData.append('action_type', 'insert')

        setLoading(true)
        try {
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
            setLoading(false)
        }
    }

    const onReUploadBrandLogo = async (event) => {
        const formData = new FormData();
        formData.append('id', parseInt(gallery['vendor-brand-logo'][0]?.id && gallery['vendor-brand-logo'][0]?.id));
        formData.append('image', event.target.files[0]);
        formData.append('action_type', 'replace')

        setLoading(true)
        try {
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
            setLoading(false)
        }
    }

    const onHandleRemoveBrandLogo = async (event) => {
        const formData = new FormData();
        formData.append('id', parseInt(gallery['vendor-brand-logo'][0]?.id && gallery['vendor-brand-logo'][0]?.id));
        formData.append('image', event.target.files[0]);
        formData.append('action_type', 'remove')

        setLoading(true)
        try {
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
            setLoading(false)
        }
    }

    // Banner Image 
    const onUploadBannerLogo = async (event) => {
        const formData = new FormData();
        formData.append('id', '');
        formData.append('image', event.target.files[0]);
        formData.append('action_type', 'insert')

        setLoading(true)
        try {
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
            setLoading(false)
        }
    }

    const onReUploadBannerLogo = async (event) => {
        const formData = new FormData();
        formData.append('id', parseInt(gallery['vendor-banner'][0]?.id && gallery['vendor-banner'][0]?.id));
        formData.append('image', event.target.files[0]);
        formData.append('action_type', 'replace')

        setLoading(true)
        try {
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
            setLoading(false)
        }
    }

    const onHandleRemoveBannerLogo = async (event) => {
        const formData = new FormData();
        formData.append('id', parseInt(gallery['vendor-banner'][0]?.id && gallery['vendor-banner'][0]?.id));
        formData.append('image', event.target.files[0]);
        formData.append('action_type', 'remove')

        setLoading(true)
        try {
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
            setLoading(false)
        }
    }

    // Package / Menu 
    const onUploadBannerPackageMenu = async (event) => {
        const formData = new FormData();
        formData.append('id', '');
        formData.append('image', event.target.files[0]);
        formData.append('action_type', 'insert')

        setLoading(true)
        try {
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
            setLoading(false)
        }
    }

    const onReUploadPackageMenu = async (event, item) => {
        console.log(event, item, "event, item");
        const formData = new FormData();
        formData.append('id', parseInt(item?.id && item?.id));
        formData.append('image', event.target.files[0]);
        formData.append('action_type', 'replace')

        setLoading(true)
        try {
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
            setLoading(false)
        }
    }

    const onHandleRemovePackageMenu = async (event, item) => {
        console.log(event, item, "event, itemGGG");
        const formData = new FormData();
        formData.append('id', parseInt(item?.id && item?.id));
        formData.append('image', event.target.files[0]);
        formData.append('action_type', 'remove')

        setLoading(true)
        try {
            const response = await api.post(`${BASE_URL}/upload-vendor-menu-image`, formData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            toast.success(successToast(response));
            getVendorImages();
            window.reload()
        } catch (error) {
            console.log(error);
            toast.error(datavalidationerror(error));
        } finally {
            setLoading(false)
        }
    }


    return {
        gallery,
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
        onHandleRemovePackageMenu
    }
}

export default useFetchPhotoGallery