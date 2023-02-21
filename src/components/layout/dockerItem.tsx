import Image from "next/image";
import { useState } from "react";

interface Props {
    image: string;
}

export const DockerItem = ({ image }: Props) => {
    const [appName, setAppName] = useState<boolean>(false); 


    const toggle = () => {
        setAppName(!appName);
        console.log(appName)
    }

    return (
        <>
            <div className={appName ? 'absolute text-white text-sm rounded-lg border-[0.5px] border-white border-opacity-10 bg-[#3b4042] bottom-28 z-10 p-1 px-4' : 'hidden'}>
                <span>Google Chrome</span>
            <div className=" absolute border-solid border-t-[#3b4042] z-30 border-t-[15px] -bottom-3 border-x-transparent border-x-[15px] border-b-0"></div>
            </div>
            <div onMouseOver={toggle} onMouseOut={() => setAppName(false)} className="h-2/3 w-16 ml-4 bg-white rounded-xl">
                <Image src={image} width={60} height={60} alt='google chrome' className="m-auto"/>
            </div>
        </>
    )
}