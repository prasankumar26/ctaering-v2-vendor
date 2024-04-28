import TopHeader from "../components/global/TopHeader"
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PhoneIcon from '@mui/icons-material/Phone';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import DatePickerSearch from "../components/global/DatePickerSearch";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { api, BASE_URL } from "../api/apiConfig";
import InquiryCard from "../components/global/InquiryCard";
import LoadingAnimation from "../components/LoadingAnimation";
import Pagination from '@mui/material/Pagination';
import { Page_Limit } from "../constant";
import Grid from '@mui/material/Grid';

const CssTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: '2px solid #F0F1F3',
      borderRadius: '8px'
    },
    '&:hover fieldset': {
      border: '2px solid #F0F1F3',
    },
    '&.Mui-focused fieldset': {
      border: '2px solid #c33332',
    },
  },
  '& input': {
    border: 'none',
    fontSize: '16px',
    padding: '10px 0px',
  },
}));


// https://api.cateringsandtiffins.in/get-vendor-enquiries?search_term=Veg&enquiry_date=2024-04-02&limit=5&current_page=1&order_by=newest_first

const Inquiries = () => {
  const { accessToken } = useSelector((state) => state?.user);
  const [loading, setLoading] = useState(false)
  const [inquiries, setInquiries] = useState([]);
  const [totalPages, setTotalPages] = useState(null)
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("")
  const [error, setError] = useState(null)

  const handleChange = (event, value) => {
    setPage(value);
  };

  const fetchInquiries = async () => {
    setLoading(true)
    try {
      const response = await api.get(`${BASE_URL}/get-vendor-enquiries?search_term=${search}&enquiry_date=2024-04-02&limit=${Page_Limit}&current_page=${page}&order_by=newest_first`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      });
      console.log(response, "response");
      setTotalPages(response?.data?.total_pages)
      setInquiries(response?.data?.enquiries)
    } catch (error) {
      setError(error?.response?.data?.message)
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchInquiries()
  }, [page])


  const handleSubmit = (e) => {
    e.preventDefault()
    fetchInquiries()
  }

  console.log(inquiries, "inquiries");

  return (
    <>
      <TopHeader title="Customer Inquiries" description="All customer details listed below" />

      <Container maxWidth="lg">
        <div className='card-box-shadow px-5 py-4 mb-4'>

            <Stack direction="row" justifyContent="space-between" alignItems="center" className="mb-4">
          <form onSubmit={handleSubmit}>
              <Stack direction="row" spacing={2} alignItems="center">
                <CssTextField
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  id="outlined-number"
                  variant="outlined"
                  placeholder="Enter your Name Here"
                  style={{ width: '100%' }}
                  InputLabelProps={{
                    style: { color: '#777777', fontSize: '12px' },
                  }}
                  InputProps={{
                    style: {
                      borderRadius: '8px',
                      backgroundColor: '#FFFFFF',
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon className="text-primary" style={{ fontSize: '18px' }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button variant="contained" className="inquiries-red-btn" type="submit">Search</Button>
              </Stack>
          </form>

          <DatePickerSearch />
        </Stack>

        <>
          {
            error !== null ? (
              <h2 className='text-center'>{error}</h2>
            ) : (
              <>
                {
                  loading ? (
                    <LoadingAnimation reviewHeight="review-height" />
                  ) : (
                    inquiries?.length > 0 ? (
                      inquiries.map((item) => (
                        <InquiryCard item={item} key={item.id} />
                      ))
                    ) : (
                        <h2 className='text-center'>No Inquiries Found</h2>
                    )
                  )}
              </>
            )
          }

        </>

        {error === null && <Stack spacing={2} direction="row" justifyContent="center">
          <Pagination count={totalPages} page={page} onChange={handleChange} />
        </Stack>}
      </div>

    </Container >

    </>
  )
}

export default Inquiries