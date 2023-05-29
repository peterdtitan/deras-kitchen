import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {},
    isLoading: true,
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
            state.isLoading = false
        },
        clearUser: (state) => {
            state.user = {}
            state.isLoading = false
        },
    }
})

export const { setUser, clearUser } = userSlice.actions

export default userSlice.reducer