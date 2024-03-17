import Stack from '@mui/material/Stack';
import RefreshIcon from '@mui/icons-material/Refresh';
import Container from '@mui/material/Container';

const TopHeader = ({title, description}) => {
    return (
        <>
            <Container maxWidth="lg">
                <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" className='mt-4 mb-4'>
                    <div>
                        <h2 className='top-header-title'>{title}</h2>
                        <p className='top-header-desc'>{description}</p>
                    </div>
                    <div>
                        <RefreshIcon style={{color: '#c33332', fontSize: '18px', cursor: 'pointer'}} />
                    </div>
                </Stack>
            </Container>
        </>
    )
}

export default TopHeader