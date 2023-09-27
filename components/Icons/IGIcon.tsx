"use client"
import { useState } from "react"

export const IGIcon = (props: any) => {
    const [hover, setHover] = useState<boolean>(false)

    return (
        <svg
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill={hover ? props.onHoverFill : props.fill}
            {...props}
        >
            <path
                fill={hover ? props.onHoverFill : props.fill}
                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
            />
        </svg>
    )
}