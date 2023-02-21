import React, { ReactElement } from 'react';
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from '@/store/authReducer';

import { Login } from './login';
import { TopBar } from './layout/topBar';
import { ResizableWindows } from './rezisableWindow';
import { GoogleWindows } from './google';
import { Docker } from './layout/docker';
export const Main = (): ReactElement => {
    const auth = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    const lockUnlock = () => {
        dispatch(setAuth());
    }

    return (
        <div className='flex h-[100vh] bg-wallpaper bg-cover bg-center bg-no-repeat relative'>
            <TopBar/>
            <Login/>
            {/* <GoogleWindows/> */}
            {/* <button onClick={lockUnlock}>Lock</button> */}

            <Docker/>
        </div>
    );
}