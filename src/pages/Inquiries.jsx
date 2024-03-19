import TopHeader from "../components/global/TopHeader"
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import DatePickerSearch from "../components/global/DatePickerSearch";

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



const Inquiries = () => {
  return (
    <>
      <TopHeader title="Customer Inquiries" description="All customer details listed below" />

      <Container maxWidth="lg">
        <div className='card-box-shadow px-5 py-4 mb-4'>

          <Stack direction="row" justifyContent="space-between" alignItems="center" className="mb-4">
            <Stack direction="row" spacing={2} alignItems="center">
              <CssTextField
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
                      <SearchIcon className="text-primary" style={{fontSize: '18px'}} />
                    </InputAdornment>
                  ),
                }}
              />
              <Button variant="contained" className="inquiries-red-btn"> Search</Button>
            </Stack>

            <DatePickerSearch />
          </Stack>

          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <Stack className="inquiries-box mb-3" direction="row" justifyContent="space-between" alignItems="center">
              <div>
                <h4 className="inquiries-title">Venkat</h4>
                <p className="inquiries-date">December 25, 2023</p>
                <p className="inquiries-desc">Buffet, Fixed 500 per head, Veg.</p>
              </div>
              <div>
                <Button variant="contained" className="inquiries-btn"> <PhoneIcon style={{ fontSize: '14px' }} className="me-2" /> Call now</Button>
              </div>
            </Stack>
          ))}
        </div>
      </Container>

    </>
  )
}

export default Inquiries