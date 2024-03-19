import React from 'react'
import TopHeader from '../components/global/TopHeader'
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import EditIcon from '@mui/icons-material/Edit';

import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const CssTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: '2px solid #F0F1F3',
            borderRadius: '8px'
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
        padding: '10px 0px',
    },
}));


const CssTextFieldMultiSelect = styled(TextField)(({ theme }) => ({
    '& .MuiInputLabel-root': { // Style for the label
        fontSize: '12px', // Set the font size for the label
        color: '#777777',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: '2px solid #F0F1F3',
            borderRadius: '12px',
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
        padding: '0px 0px',
        height: '10px'
    },
}));

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


const Cuisines = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <TopHeader title="Manage Your Cuisines" description="Add your Cuisines below" />

            <Container maxWidth="lg">
                <div className='card-box-shadow px-5 py-4 mb-4'>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <p className='cuisines-title'>Cuisines You cater</p>
                        <Button variant="contained" className="inquiries-btn" onClick={handleClickOpen}> + Add more Cuisines </Button>
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


                    <Stack direction="row" justifyContent="center" alignItems="center" flexWrap="wrap" spacing={2} className='mt-4 cursor-pointer w-100'>
                    <Button variant="contained" className="cuisines-list-btn"> Tamil </Button>
                    <Button variant="contained" className="cuisines-list-btn"> Rajastani </Button>
                    <Button variant="contained" className="cuisines-list-btn"> Kerala </Button>
                    <Button variant="contained" className="cuisines-list-btn"> Bangalore </Button>
                    <Button variant="contained" className="cuisines-list-btn"> Punhabi </Button>
                    </Stack>

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
                    <h2 className='cusines-modal-title'>Choose Your Cuisines From the List</h2>
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
                    <Stack direction="row" justifyContent="center">
                        <CssTextField
                            className='mb-3'
                            id="outlined-number"
                            variant="outlined"
                            placeholder="Search your Cuisine"
                            style={{ width: '75%' }}
                            InputLabelProps={{
                                style: { color: '#777777', fontSize: '12px' },
                            }}
                            InputProps={{
                                style: {
                                    borderRadius: '8px',
                                    backgroundColor: '#FFFFFF',
                                },
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon className="text-primary" style={{ fontSize: '18px' }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Stack>

                    <Stack direction="row" spacing={2} className='mt-3'>
                        <Autocomplete
                            multiple
                            id="checkboxes-tags-demo"
                            options={top100Films}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.title}
                            getOptionSelected={(option, value) => option.title === value.title}
                            renderOption={(props, option, { selected }) => (
                                <li {...props} style={{ fontSize: '10px' }}>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{ marginRight: 8, fontSize: '10px' }}
                                        checked={selected}
                                    />
                                    {option.title}
                                </li>
                            )}
                            renderTags={(value, getTagProps) =>
                                value.map((option, index) => (
                                    <li {...getTagProps({ index })} style={{ fontSize: '10px' }}>
                                        {option.title}
                                    </li>
                                ))
                            }
                            style={{ width: '100%' }}
                            renderInput={(params) => (
                                <CssTextFieldMultiSelect
                                    label="North Indian"
                                    {...params}
                                />
                            )}
                        />

                        <Autocomplete
                            multiple
                            id="checkboxes-tags-demo"
                            options={top100Films}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.title}
                            getOptionSelected={(option, value) => option.title === value.title}
                            renderOption={(props, option, { selected }) => (
                                <li {...props} style={{ fontSize: '10px' }}>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{ marginRight: 8, fontSize: '10px' }}
                                        checked={selected}
                                    />
                                    {option.title}
                                </li>
                            )}
                            renderTags={(value, getTagProps) =>
                                value.map((option, index) => (
                                    <li {...getTagProps({ index })} style={{ fontSize: '10px' }}>
                                        {option.title}
                                    </li>
                                ))
                            }
                            style={{ width: '100%' }}
                            renderInput={(params) => (
                                <CssTextFieldMultiSelect
                                    label="South Indian"
                                    {...params}
                                />
                            )}
                        />
                    </Stack>


                    <Stack direction="row" spacing={2} className='mt-3'>
                        <Autocomplete
                            multiple
                            id="checkboxes-tags-demo"
                            options={top100Films}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.title}
                            getOptionSelected={(option, value) => option.title === value.title}
                            renderOption={(props, option, { selected }) => (
                                <li {...props} style={{ fontSize: '10px' }}>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{ marginRight: 8, fontSize: '10px' }}
                                        checked={selected}
                                    />
                                    {option.title}
                                </li>
                            )}
                            renderTags={(value, getTagProps) =>
                                value.map((option, index) => (
                                    <li {...getTagProps({ index })} style={{ fontSize: '10px' }}>
                                        {option.title}
                                    </li>
                                ))
                            }
                            style={{ width: '100%' }}
                            renderInput={(params) => (
                                <CssTextFieldMultiSelect
                                    label="East Indian"
                                    {...params}
                                />
                            )}
                        />

                        <Autocomplete
                            multiple
                            id="checkboxes-tags-demo"
                            options={top100Films}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.title}
                            getOptionSelected={(option, value) => option.title === value.title}
                            renderOption={(props, option, { selected }) => (
                                <li {...props} style={{ fontSize: '10px' }}>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{ marginRight: 8, fontSize: '10px' }}
                                        checked={selected}
                                    />
                                    {option.title}
                                </li>
                            )}
                            renderTags={(value, getTagProps) =>
                                value.map((option, index) => (
                                    <li {...getTagProps({ index })} style={{ fontSize: '10px' }}>
                                        {option.title}
                                    </li>
                                ))
                            }
                            style={{ width: '100%' }}
                            renderInput={(params) => (
                                <CssTextFieldMultiSelect
                                    label="West Indian"
                                    {...params}
                                />
                            )}
                        />
                    </Stack>



                    <Stack direction="row" spacing={2} className='mt-3'>
                        <Autocomplete
                            multiple
                            id="checkboxes-tags-demo"
                            options={top100Films}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.title}
                            getOptionSelected={(option, value) => option.title === value.title}
                            renderOption={(props, option, { selected }) => (
                                <li {...props} style={{ fontSize: '10px' }}>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{ marginRight: 8, fontSize: '10px' }}
                                        checked={selected}
                                    />
                                    {option.title}
                                </li>
                            )}
                            renderTags={(value, getTagProps) =>
                                value.map((option, index) => (
                                    <li {...getTagProps({ index })} style={{ fontSize: '10px' }}>
                                        {option.title}
                                    </li>
                                ))
                            }
                            style={{ width: '100%' }}
                            renderInput={(params) => (
                                <CssTextFieldMultiSelect
                                    label="North East Indian"
                                    {...params}
                                />
                            )}
                        />

                        <Autocomplete
                            multiple
                            id="checkboxes-tags-demo"
                            options={top100Films}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.title}
                            getOptionSelected={(option, value) => option.title === value.title}
                            renderOption={(props, option, { selected }) => (
                                <li {...props} style={{ fontSize: '10px' }}>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{ marginRight: 8, fontSize: '10px' }}
                                        checked={selected}
                                    />
                                    {option.title}
                                </li>
                            )}
                            renderTags={(value, getTagProps) =>
                                value.map((option, index) => (
                                    <li {...getTagProps({ index })} style={{ fontSize: '10px' }}>
                                        {option.title}
                                    </li>
                                ))
                            }
                            style={{ width: '100%' }}
                            renderInput={(params) => (
                                <CssTextFieldMultiSelect
                                    label="Othrer Indian Cuisines"
                                    {...params}
                                />
                            )}
                        />
                    </Stack>


                    <Stack direction="row" spacing={2} className='mt-3'>
                        <Autocomplete
                            multiple
                            id="checkboxes-tags-demo"
                            options={top100Films}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.title}
                            getOptionSelected={(option, value) => option.title === value.title}
                            renderOption={(props, option, { selected }) => (
                                <li {...props} style={{ fontSize: '10px' }}>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{ marginRight: 8, fontSize: '10px' }}
                                        checked={selected}
                                    />
                                    {option.title}
                                </li>
                            )}
                            renderTags={(value, getTagProps) =>
                                value.map((option, index) => (
                                    <li {...getTagProps({ index })} style={{ fontSize: '10px' }}>
                                        {option.title}
                                    </li>
                                ))
                            }
                            style={{ width: '100%' }}
                            renderInput={(params) => (
                                <CssTextFieldMultiSelect
                                    label="INTERNATIONAL CUISINES"
                                    {...params}
                                />
                            )}
                        />

                    </Stack>



                </DialogContent>
                <DialogActions style={{display: 'flex', justifyContent: 'center'}}>
                    <Button variant="contained" className="inquiries-btn" onClick={handleClickOpen}> Submit </Button>
                </DialogActions>
            </BootstrapDialog>

        </>
    )
}

export default Cuisines


// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'Punjabi', year: 1994 },
    { title: 'Rajastani', year: 1972 },
    { title: 'Punjabi', year: 1994 },
    { title: 'Rajastani', year: 1972 },
    { title: 'Punjabi', year: 1994 },
    { title: 'Rajastani', year: 1972 },
    { title: 'Punjabi', year: 1994 },
    { title: 'Rajastani', year: 1972 },
    { title: 'Punjabi', year: 1994 },
    { title: 'Rajastani', year: 1972 },
    { title: 'Punjabi', year: 1994 },
    { title: 'Rajastani', year: 1972 },
    { title: 'Punjabi', year: 1994 },
    { title: 'Rajastani', year: 1972 },
    { title: 'Punjabi', year: 1994 },
    { title: 'Rajastani', year: 1972 },
    { title: 'Punjabi', year: 1994 },
    { title: 'Rajastani', year: 1972 },
    { title: 'Punjabi', year: 1994 },
    { title: 'Rajastani', year: 1972 },
    { title: 'Punjabi', year: 1994 },
    { title: 'Rajastani', year: 1972 },
    { title: 'Punjabi', year: 1994 },
    { title: 'Rajastani', year: 1972 },
    { title: 'Punjabi', year: 1994 },
    { title: 'Rajastani', year: 1972 },
    { title: 'Punjabi', year: 1994 },
    { title: 'Rajastani', year: 1972 },
    { title: 'Punjabi', year: 1994 },
    { title: 'Rajastani', year: 1972 },
    { title: 'Punjabi', year: 1994 },
    { title: 'Rajastani', year: 1972 },

];