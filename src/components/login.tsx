import React, { ReactElement, useState, useEffect } from "react";
import Image from 'next/image';
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "@/store/authReducer";
import { RootState } from "@/store/store";
import { IUser } from "@/Interface/IUser";
import { HiArrowNarrowRight, HiX } from 'react-icons/hi';
import { setIsAllowed, setShowButton } from "@/store/loginReducer";

export const Login = (): ReactElement => {
    const auth: boolean = useSelector((state: RootState) => state.auth);
    const user: IUser = useSelector((state: RootState) => state.user);
    const [style, setStyle] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const dispatch = useDispatch();
    const login = useSelector((state: RootState) => state.login);

    useEffect(() => {

    },[password])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const lockUnlock = () => {
        dispatch(setShowButton(false));
        dispatch(setAuth());
    }

    const verifyPassword = async (inputPassword: string): Promise<boolean> => {
        return inputPassword === user.password;
    }

    const handleKey = async (event: React.KeyboardEvent<HTMLInputElement>):Promise<void> => {
        setStyle('');
        if(event.key === "Enter"){
            await verifyPassword(password).then(data => {
                dispatch(setIsAllowed(data));
            });
        };
    }

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter"){
            if(!login.isAllowed){
                setStyle('animate-wrong-password');
            } else {
                setPassword('');
                lockUnlock();
            }
        }
    } 

    if(auth) {
        return (
            <div onClick={() => login.showButton == false ? dispatch(setShowButton(true)) : {}}
                className="z-50 absolute flex flex-col justify-center items-center h-full w-full text-white bg-wallpaper bg-cover bg-center bg-no-repeat">
                <div className="flex w-[10em] h-[10em] rounded-full bg-avatar m-10">
                    <Image src="/avatar.png" width={80} height={80} alt="avatar" className="object-contain m-auto"/>
                </div>
                <div className="font-bold text-2xl text-shadow">{user.firstName + ' ' + user.lastName} </div>
                {
                    login.showButton ?
                        <div className={`${style} flex justify-start items-center shadow-macos text-sm text-login font-medium m-4 bg-blur-base bg-blend-overlay w-50 h-8 backdrop-blur-sm rounded-2xl box-border`}>
                            <input
                                onChange={handleChange}
                                type='password'
                                value={password}
                                onKeyUpCapture={handleKey}
                                onKeyUp={handleKeyUp}
                                placeholder='Enter Password'
                                className='bg-transparent placeholder:text-login w-4/4 p-2 ml-2 overflow-hidden outline-none font-medium'>
                            </input>
                            <span className="flex justify-center content-center border-2 border-login rounded-full w-6 h-6 mr-1 text-2xl">
                                {   login.isAllowed == undefined ?
                                        <HiArrowNarrowRight className="h-full"></HiArrowNarrowRight>
                                    :   <HiX className="h-full"></HiX>
                                }
                            </span>
                        </div>
                    : <div className="p-4 m-4"></div>
                }
                <span className="font-bold text-sm text-shadow">Touch ID or Enter Password</span>
            </div>
        )    
    } else {
        return <></>
    }
}