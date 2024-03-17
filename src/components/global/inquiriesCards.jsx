import Stack from '@mui/material/Stack';
import { Divider } from '@mui/material';

const InquiriesCards = () => {
    return (
        <>
            <Stack direction="row" justifyContent="space-between" spacing={1}>
                <Stack direction="row" spacing={1} style={{ width: '75%' }}>
                    <img src="https://dashkit.goodthemes.co/assets/img/avatars/profiles/avatar-1.jpg" alt="" className="img-fluid ic-img" />
                    <div className="">
                        <h5 className='ic-title'>Andrew Hernandez</h5>
                        <p className='ic-desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id deleniti neque consequatur est quibusdam! Recusandae nemo perferendis et itaque molestiae.</p>
                    </div>
                </Stack>
                <p className='ic-small-text'>Jan 28th, 4:30</p>
            </Stack>
            <div className='mb-3' style={{ marginTop: '10px', borderTop: '1px solid #e0e3e7' }}>
                <Divider />
            </div>
        </>
    )
}

export default InquiriesCards