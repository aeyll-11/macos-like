import Image from "next/image"
import { DockerItems } from "./dockerItems"
export const Docker = () => {

    return (
        <div className="fixed self-end flex left-1/4 items-center w-1/2 h-24 rounded-2xl bg-white/5 backdrop-blur-xl">
            <DockerItems/>
        </div>
    )
}

