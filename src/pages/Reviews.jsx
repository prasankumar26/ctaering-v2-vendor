import TopHeader from '../components/global/TopHeader'
import Container from '@mui/material/Container';
import InquiriesCards from '../components/global/inquiriesCards';
import Select, { components } from 'react-select';
import Stack from '@mui/material/Stack';

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

const Reviews = () => {
    return (
        <>
            <TopHeader title="Customer Reviews" description="All customer reviews listed below" />
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