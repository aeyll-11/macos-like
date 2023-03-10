import type BatteryManager from "@/Interface/IBatteryManager";
import type Battery from "@/Interface/IBatteryManager";
import { useEffect, useState } from "react";

export const TopBar = () => {
    const [date, setDate] = useState<string>('');
    const [battery, setBattery] = useState<BatteryManager>();
    const [batteryLevel, setBatteryLevel] = useState<number>();
    const [navigatorLanguage, setNavigatorLanguage] = useState<string>();
    useEffect(() => {
        updateDateTime();
        setNavigatorBattery();
        setNavigatorLanguage(navigator.language.slice(3));
    }, [date, battery]);
    

    const setNavigatorBattery = async () => {
        return await (navigator as Battery)
            .getBattery()
            .then((res) => {
                setBattery(res)
                setBatteryLevel(res.level * 100);
                res.addEventListener('levelchange', () => {
                    setBattery(res);
                    setBatteryLevel(res.level * 100);
                })
            });
    }

    const updateDateTime = () => {
        return setDate(
            new Date()
                .toLocaleString('default',
                    { 
                        month: 'short',
                        day: 'numeric', 
                        weekday:'short', 
                        hour:'2-digit', 
                        minute:'2-digit'
                    })
                .replace(',', '')
                .replace(',', ' at')
        );
    }
    setInterval(() => {
        updateDateTime();
    }, 20000);
    return (
        <div className="z-50 flex justify-end items-center w-full h-6 absolute text-white cursor-default">
            <div className="flex justify-center bg-white rounded-sm mr-2">
                <span className="text-[9px] px-[2px] py-[1.5px] text-black opacity-70 font-medium">
                    {navigatorLanguage}
                </span>
            </div>
            <div className="h-[0.8rem] mx-1 w-6 border border-white border-opacity-50 p-[1px] rounded-[3px]">
                <div style={{width: batteryLevel + '%'}} className='relative h-full bg-white bg-opacity-90 rounded-[3px]'>
                    <div className="absolute bg-opacity-50 bg-white h-[4px] w-[1.8px] rounded-r-md right-[-5px] top-[2.5px]"></div>
                </div>
            </div>
            <span className="m-2">{date}</span>
        </div>
    );
}
