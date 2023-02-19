import { MouseEventHandler, ReactNode, useCallback, useRef, useState } from "react"

interface Props {
    children: ReactNode
}

export const ResizableWindows = ({children}: Props) => {
    const resizableWindowRef = useRef<any>();
    const barRef = useRef<HTMLDivElement>(null);
    const [prevMousePosition, setPrevMousePosition] = useState<{x: number, y: number}>();
    const [divPosition, setDivPosition] = useState<{x: number, y: number}>({x:50,y: 50});

    const handleMouseClick = (event:any) => {
        const currentMousePosition = {x: event.clientX, y: event.clientY};
        if(prevMousePosition == undefined) {
            setPrevMousePosition(currentMousePosition);
        }

        if(prevMousePosition && prevMousePosition.x != currentMousePosition.x && prevMousePosition.y != currentMousePosition.y) {
            const mouseDiffPosition = {x: currentMousePosition.x - prevMousePosition.x, y: currentMousePosition.y - prevMousePosition.y};
            setDivPosition({x:divPosition.x + mouseDiffPosition.x, y:divPosition.y + mouseDiffPosition.y});
            setPrevMousePosition(currentMousePosition);
        }
    }

    return(
        <div 
            ref={resizableWindowRef}
            style={divPosition ? {top:`${divPosition.y}px`, left:`${divPosition.x}px`}: {}} 
            className="absolute h-5/6 w-5/6 top-10 border-[0.5px] border-white border-opacity-50 rounded-md resizableWindow"
            >
            <div
                ref={barRef}
                draggable
                onDragOver={handleMouseClick}
                className="h-6 w-full bg-[#3b4042] rounded-t-lg">
                    <div className="flex w-1/6 h-full items-center px-2">
                        <div className="rounded-full h-[12px] w-[12px] bg-[#fe5f57]">
                        </div>
                        <div className="rounded-full h-[12px] ml-1 w-[12px] bg-[#575b5e]"></div>
                        <div className="rounded-full h-[12px] ml-1 w-[12px] bg-[#575b5e]"></div>
                    </div>
            </div>
            {children}
        </div>
    )
}