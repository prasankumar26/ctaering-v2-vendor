import TopHeader from "../components/global/TopHeader"
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import YearlyPlan from "../components/global/YearlyPlan";


const CssTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: '2px solid #F0F1F3',
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
        padding: '10px 20px',
    },
}));


const SubscriptionPlan = () => {
    return (
        <>
            <TopHeader title="Business Profile" description="below is a business overview" />
            <Container maxWidth="lg">
                <div className='card-box-shadow px-5 py-4 mb-4'>
                    <p className='sub-plan-title text-center'>SUBSCRIPTION PLANS</p>
                    <p className="branches-desc text-center">Choose your subscription types</p>
                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} className="mt-3 mb-4">
                        <h2 className="sub-plan-yearly">Monthly</h2>
                        <Switch defaultChecked />
                        <h2 className="sub-plan-yearly">Yearly</h2>
                    </Stack>
                    <YearlyPlan />
                </div>
            </Container>
        </>
    )
}

export default SubscriptionPlan