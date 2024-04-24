import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';

const TopHeader = ({ title, description, date }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate("/create-account");
    }

    return (
        <>
            <Container maxWidth="lg">
                <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" className='mt-4 mb-4'>
                    <div>
                        <h2 className='top-header-title'>{title ? title : ''}</h2>
                        <p className='top-header-desc'>{description ? description : ''}</p>
                        <p className='top-header-desc'>{date ? date : ''}</p>
                    </div>
                        <LogoutIcon onClick={handleLogout} style={{ color: '#c33332', fontSize: '18px', cursor: 'pointer' }} />
                </Stack>
            </Container>
        </>
    )
}

export default TopHeader