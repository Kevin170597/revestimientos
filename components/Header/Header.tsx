import Image from "next/image"
import Link from "next/link"

import { FBIcon } from "../Icons/FBIcon"
import { IGIcon } from "../Icons/IGIcon"
import { WPPIcon } from "../Icons/WPPIcon"

export const Header = () => {
    return (
        <header className="flex items-center justify-between h-[15vh] px-10 bg-primary border-b-white border-b">
            <div className="flex items-center">
                <Link
                    href={"/tienda"}
                    className="flex items-center"
                >
                    <Image
                        className="rounded-full mr-4"
                        width={35}
                        height={35}
                        src="/logo_v1white.png"
                        alt="logo"
                    />
                    <h2>Kaliza</h2>
                </Link>
            </div>
            <div className="flex items-center gap-6">
                <Link target="_blank" href={"https://instagram.com/kevin170597"}>
                    <FBIcon onHoverFill="#97e0ff" fill="#fff" />
                </Link>
                <Link target="_blank" href={"https://instagram.com/kevin170597"}>
                    <IGIcon onHoverFill="#ef97ff" fill="#fff" />
                </Link>
                <Link target="_blank" href={"https://instagram.com/kevin170597"}>
                    <WPPIcon onHoverFill="#a0ff97" fill="#fff" />
                </Link>
            </div>
        </header>
    )
}