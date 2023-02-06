import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: false,
    reducers: {
        setAuth: (state) => {
            console.log(state);
            return state = !state;
        }
    }
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;