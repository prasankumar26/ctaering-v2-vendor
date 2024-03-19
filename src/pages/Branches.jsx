import React from 'react'
import TopHeader from '../components/global/TopHeader'
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import BranchesCard from '../components/global/BranchesCard';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


const CssTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: '2px solid #e0e3e7',
    },
    '&:hover fieldset': {
      border: '2px solid #e0e3e7',
    },
    '&.Mui-focused fieldset': {
      border: '2px solid #a81e1e',
    },
  },
  '& input': {
    border: 'none',
    fontSize: '16px',
    padding: '10px 20px',
  },
}));

const Branches = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TopHeader title="Manage Your Branches" description="Manage your All business Branches here" />

      <Container maxWidth="lg">
        <div className='card-box-shadow px-5 py-4 mb-4'>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <p className='cuisines-title'>Sub Branches</p>
            <Button variant="contained" className="inquiries-btn" onClick={handleClickOpen}> + Add New Branch </Button>
          </Stack>
          <Divider
            className='mt-4'
            variant="middle"
            style={{
              backgroundColor: '#c33332',
              margin: '0px'
            }}
          />

          <BranchesCard />

        </div>
      </Container>



      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        // maxWidth="sm"
        // fullWidth
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <h2 className='branches-modal-title'>Enter Your New Branches details</h2>
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

          <CssTextField
            id="outlined-number"
            variant="outlined"
            label="Catering Service Name"
            className='mb-3'
            style={{ width: '100%' }}
            InputLabelProps={{
              style: { color: '#777777', fontSize: '10px' },
            }}
            InputProps={{
              style: {
                borderRadius: '8px',
                backgroundColor: '#FFFFFF',
              }
            }}
          />

          <CssTextField
            id="outlined-number"
            variant="outlined"
            label="Contact Person Name - Same as Main Branch"
            className='mb-3'
            style={{ width: '100%' }}
            InputLabelProps={{
              style: { color: '#777777', fontSize: '10px' },
            }}
            InputProps={{
              style: {
                borderRadius: '8px',
                backgroundColor: '#FFFFFF',
              }
            }}
          />

          <CssTextField
            id="outlined-number"
            variant="outlined"
            label="Phone Number"
            className='mb-3'
            style={{ width: '100%' }}
            InputLabelProps={{
              style: { color: '#777777', fontSize: '10px' },
            }}
            InputProps={{
              style: {
                borderRadius: '8px',
                backgroundColor: '#FFFFFF',
              }
            }}
          />

          <CssTextField
            id="outlined-number"
            variant="outlined"
            label="Street Name"
            className='mb-3'
            style={{ width: '100%' }}
            InputLabelProps={{
              style: { color: '#777777', fontSize: '10px' },
            }}
            InputProps={{
              style: {
                borderRadius: '8px',
                backgroundColor: '#FFFFFF',
              }
            }}
          />

          <CssTextField
            id="outlined-number"
            variant="outlined"
            label="Area"
            className='mb-3'
            style={{ width: '100%' }}
            InputLabelProps={{
              style: { color: '#777777', fontSize: '10px' },
            }}
            InputProps={{
              style: {
                borderRadius: '8px',
                backgroundColor: '#FFFFFF',
              }
            }}
          />

          <CssTextField
            id="outlined-number"
            variant="outlined"
            label="City"
            className='mb-3'
            style={{ width: '100%' }}
            InputLabelProps={{
              style: { color: '#777777', fontSize: '10px' },
            }}
            InputProps={{
              style: {
                borderRadius: '8px',
                backgroundColor: '#FFFFFF',
              }
            }}
          />


          <CssTextField
            id="outlined-number"
            variant="outlined"
            label="Pincode"
            className='mb-3'
            style={{ width: '100%' }}
            InputLabelProps={{
              style: { color: '#777777', fontSize: '10px' },
            }}
            InputProps={{
              style: {
                borderRadius: '8px',
                backgroundColor: '#FFFFFF',
              }
            }}
          />


          <CssTextField
            id="outlined-number"
            variant="outlined"
            label="Map Location Link"
            className='mb-3'
            style={{ width: '100%' }}
            InputLabelProps={{
              style: { color: '#777777', fontSize: '10px' },
            }}
            InputProps={{
              style: {
                borderRadius: '8px',
                backgroundColor: '#FFFFFF',
              }
            }}
          />




        </DialogContent>
        <DialogActions style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" className="inquiries-btn" onClick={handleClickOpen}> Submit </Button>
        </DialogActions>
      </BootstrapDialog>

    </>
  )
}

export default Branches
