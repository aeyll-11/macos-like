import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
    showButton:boolean;
    isAllowed:boolean | undefined;
}

const initialState: LoginState = {
    showButton: false,
    isAllowed: undefined,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setShowButton: (state, action: PayloadAction<boolean>) => {
            state.showButton = action.payload;
        },
        setIsAllowed: (state, action: PayloadAction<boolean>) => {
            state.isAllowed = action.payload;
        } 
    }
});

export const { setShowButton, setIsAllowed } = loginSlice.actions;

export default loginSlice.reducer;