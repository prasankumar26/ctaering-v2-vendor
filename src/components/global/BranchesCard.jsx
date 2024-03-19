import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import EditIcon from '@mui/icons-material/Edit';


const BranchesCard = () => {
    return (
        <>
            <Grid container spacing={2} className='mt-4'>
                {[1, 2, 3].map((i) => (
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4} >
                        <div className="branches-card">
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <p className='branches-active'>Active</p>
                                    <Switch defaultChecked size="small" style={{ color: '#459412' }} />
                                </Stack>
                                <div>
                                    <EditIcon style={{ color: '#c33332', fontSize: '18px' }} />
                                </div>
                            </Stack>
                            <div className='mt-3'>
                                <h4 className='branches-title'>Saravana Catering Service</h4>
                                <p className='branches-desc mb-1'>S. Suresh</p>
                                <p className='branches-desc mb-1'>8703256523</p>
                                <p className='branches-desc'>29, Thirumalai Pillai Ln, Sathyamurthy Nagar, Adyar, Chennai</p>
                            </div>
                        </div>
                    </Grid>
                ))}

            </Grid>
        </>
    )
}

export default BranchesCard