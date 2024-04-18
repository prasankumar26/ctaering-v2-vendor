import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { api, BASE_URL } from '../api/apiConfig';

const useFetchCuisines = () => {
    const [loading, setLoading] = useState(false)
    const [cuisinesList, setCuisinesList] = useState([])
    const { accessToken } = useSelector((state) => state?.user?.accessToken);

    const fetchOccations = async () => {
        setLoading(true)
        try {
            const response = await api(`${BASE_URL}/get-vendor-cuisines`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            setCuisinesList(response?.data?.data)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchOccations()
    }, [])

    return { cuisinesList, loading, setCuisinesList }
}

export default useFetchCuisines