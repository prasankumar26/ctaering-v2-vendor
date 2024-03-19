import React from 'react'
import TopHeader from '../components/global/TopHeader'
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import EditIcon from '@mui/icons-material/Edit';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import Checkbox from '@mui/material/Checkbox';
import ExploreCaterersByOccasion from '../components/global/ExploreCaterersByOccasion';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const Occasions = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <TopHeader title="Manage Your Occasions" description="Add your Occasions below" />

            <Container maxWidth="lg">
                <div className='card-box-shadow px-5 py-4 mb-4'>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <p className='cuisines-title'>Occasions You cater</p>
                        <Button variant="contained" className="inquiries-btn" onClick={handleClickOpen}> + Add Occasions </Button>
                    </Stack>
                    <Divider
                        className='mt-4'
                        variant="middle"
                        style={{
                            backgroundColor: '#c33332',
                            margin: '0px'
                        }}
                    />

                    <Stack direction="row" justifyContent="end" className='mt-4 cursor-pointer' onClick={handleClickOpen}>
                        <EditIcon className='text-primary' style={{ fontSize: '18px' }} />
                    </Stack>


                    <ExploreCaterersByOccasion />

                </div>
            </Container>



            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    <h2 className='cusines-modal-title'>Select Occasions from below</h2>
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>

                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                        <div className='card-box-shadow px-1 py-1 mb-3'>
                            <Stack direction="row" justifyContent="space-between" >
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <img className='occasions-modal-img' src="/img/occasions/01.jpg" alt="" />
                                    <p className='occasions-modal-desc'>Wedding</p>
                                </Stack>
                                <div>
                                    <Checkbox {...label} defaultChecked size="small" />
                                </div>
                            </Stack>
                        </div>
                    ))}

                </DialogContent>
                <DialogActions style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" className="inquiries-btn" onClick={handleClickOpen}> Add Occasions </Button>
                </DialogActions>
            </BootstrapDialog>

        </>
    )
}

export default Occasions
