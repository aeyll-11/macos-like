import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '@/Interface/IUser';

export const userSlice = createSlice({
    name: 'auth',
    initialState: {
        firstName: 'Idriss',
        lastName: 'Taguine',
        password: 'Aeyll'
    } as IUser,
    reducers: {
    }
});

export default userSlice.reducer;