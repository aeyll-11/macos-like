import { ReactEventHandler } from "react"
import { ResizableWindows } from "./rezisableWindow"

export const GoogleWindows = () => {

    return (
        <ResizableWindows>
            <iframe src="https://taguine-idriss.vercel.app" className="w-full h-full"></iframe>
        </ResizableWindows>
    )
}