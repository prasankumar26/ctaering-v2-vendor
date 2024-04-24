import TopHeader from '../components/global/TopHeader'
import Container from '@mui/material/Container';
import InquiriesCards from '../components/global/inquiriesCards';
import Select from 'react-select';
import Stack from '@mui/material/Stack';
import { setAccessToken } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';

const names = [
    'Most relvent',
    'Newest first',
    'Oldest first'
];


const ReactSelect = ({ text1 }) => {
    const options = names.map((name) => ({ value: name, label: name }));
    return (
        <Select
            className='mt-3'
            options={options}
            isSearchable
            // isMulti
            placeholder={text1}
            // components={{ DropdownIndicator }}
            styles={{
                control: (baseStyles, { isFocused }) => ({
                    ...baseStyles,
                    borderRadius: '8px',
                    padding: '0px 0px',
                    border: `2px solid #e0e3e7`,
                    width: '200px',
                    color: '#FFFFFF',
                    '&:hover': {
                        border: `2px solid #e0e3e7`,
                    },
                }),
                input: (baseStyles) => ({
                    ...baseStyles,
                    color: '#C33332',
                }),
                multiValue: (baseStyles) => ({
                    ...baseStyles,
                    color: '#C33332',
                    backgroundColor: '#C33332',
                }),
                multiValueLabel: (baseStyles) => ({
                    ...baseStyles,
                    color: '#C33332',
                }),
                option: (baseStyles, { isFocused, isSelected }) => ({
                    ...baseStyles,
                    backgroundColor: isSelected ? '#C33332' : isFocused ? '#FADBD8' : 'transparent',
                    color: isSelected ? 'white' : '#C33332',
                    '&:hover': {
                        backgroundColor: isSelected ? '#C33332' : '#FADBD8',
                    },
                }),
            }}
        />
    )
}

// accessToken(pin):"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55X2lkIjoiNTk1MTE5IiwiaWF0IjoxNzEzOTM2NzczLCJleHAiOjE3MTM5NDAzNzN9.wpJpBOZBSOtnsC0Csu7QLZj_Pkod8vqJe3b_HIImASI"
// refreshToken(pin):"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55X2lkIjoiNTk1MTE5IiwiaWF0IjoxNzEzOTM2NzczLCJleHAiOjE3MTM5NDM5NzN9.pZkejNIHlWx6tZ6t3i12BWOIfHHIbea0UQ2ccFY6-eA"

const Reviews = () => {
    const dispatch = useDispatch();
    const onHandleAdd = () => {
        dispatch(setAccessToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55X2lkIjoiNTg3NDIxIiwiaWF0IjoxNzEzNDYwMjE2LCJleHAiOjE3MTM0NjM4MTZ9.Z76RZNz25uwD8T7Rd-IhjwvoOswmQ_5nQ6ryof9wkpE"));
    }

    return (
        <>
            <TopHeader title="Customer Reviews" description="All customer reviews listed below" />
            <h1 onClick={() => onHandleAdd()}>HELLO Dispatch</h1>
            <Container maxWidth="lg">
                <div className='card-box-shadow px-3 py-0 mb-4'>
                    <Stack direction="row" alignItems="center" justifyContent="end" className='mb-4'>
                        <p className='me-2 mt-2 sort-reviews'>Sort Reviews By:</p> <ReactSelect />
                    </Stack>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <InquiriesCards />
                    ))}
                </div>
            </Container>
        </>
    )
}

export default Reviews