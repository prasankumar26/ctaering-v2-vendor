import TopHeader from '../components/global/TopHeader'
import Container from '@mui/material/Container';
import Select from 'react-select';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import LoadingAnimation from '../components/LoadingAnimation';
import useFetchReviews from '../hooks/useFetchReviews';
import ReviewCards from '../components/global/reviewCards';

const names = [
    'newest_first',
    'oldest_first',
    // 'most_relevent'
];

const ReactSelect = ({ text1, selectedOption, handleSelectedChange }) => {
    const options = names.map((name) => ({ value: name, label: name }));
    return (
        <Select
            className='mt-3'
            options={options}
            isSearchable
            // isMulti
            value={selectedOption}
            onChange={handleSelectedChange}
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

    const { loading, reviews, totalPages, selectedOption, handleSelectedChange, handleChange, page } = useFetchReviews();

    return (
        <>
            <TopHeader title="Customer Reviews" description="All customer reviews listed below" />
            <Container maxWidth="lg">
                <div className='card-box-shadow px-3 py-0 mb-4'>
                    <Stack direction="row" alignItems="center" justifyContent="end" className='mb-4'>
                        <p className='me-2 mt-2 sort-reviews'>Sort Reviews By:</p>
                        <ReactSelect selectedOption={selectedOption} handleSelectedChange={handleSelectedChange} />
                    </Stack>
                    <>
                        {loading ? (
                            <LoadingAnimation reviewHeight="review-height" />
                        ) : (
                            reviews?.length > 0 ? (
                                reviews.map((review) => (
                                    <ReviewCards review={review} key={review.id} />
                                ))
                            ) : (
                                <h2>No Reviews Found</h2>
                            )
                        )}
                    </>
                </div>
                <Stack spacing={2} direction="row" justifyContent="center">
                    <Pagination count={totalPages} page={page} onChange={handleChange} />
                </Stack>
            </Container>
        </>
    )
}

export default Reviews