import React, { ReactElement } from 'react';
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from '@/store/authReducer';
export const Main = (): ReactElement => {
    const auth = useSelector((state: RootState) => state.auth);
    
    const dispatch = useDispatch();

    const lockUnlock = () => {
        dispatch(setAuth());
    }
    return (
        <div>
            <button onClick={lockUnlock}>Login</button>
        </div>
    );
}