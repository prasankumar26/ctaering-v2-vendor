import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: {},
    loginUserData: {},
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
        setLoginUserData: (state, action) => {
            state.loginUserData = action.payload;
        },
        setVendorId: (state, action) => {
            state.vendorId = action.payload;
        },
        setAccessToken: (state, action) =>{
            state.accessToken = action.payload;
        }
    }
})

export const { setData, setLoginUserData, setVendorId, setAccessToken } = userSlice.actions;
export default userSlice.reducer