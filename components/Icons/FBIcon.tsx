"use client"
import { useState } from "react"

export const FBIcon = (props: any) => {
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
                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95Z"
            />
        </svg>
    )
}