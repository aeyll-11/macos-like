import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: true,
    reducers: {
        setAuth: (state) => {
            return state = !state;
        }
    }
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;