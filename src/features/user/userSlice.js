import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: {},
    vendorId: {},
    accessToken: {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.userData = action.payload;
        },
        setVendorId: (state, action) => {
            state.vendorId = action.payload;
        },
        setAccessToken: (state, action) =>{
            state.accessToken = action.payload;
        }
    }
})

export const { setData, setVendorId, setAccessToken } = userSlice.actions;
export default userSlice.reducer