import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import loginReducer from './loginReducer';
import userReducer from './userReducer';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        login: loginReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
