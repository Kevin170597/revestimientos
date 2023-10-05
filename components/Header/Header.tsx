import Image from "next/image"
import styles from "./Header.module.css"
import Link from "next/link"

import { FBIcon } from "../Icons/FBIcon"
import { IGIcon } from "../Icons/IGIcon"
import { WPPIcon } from "../Icons/WPPIcon"

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.siteName}>
                <Link
                    href={"/tienda"}
                    className={styles.homeLink}
                >
                    <Image
                        className={styles.logo}
                        width={35}
                        height={35}
                        src="/logo_v1white.png"
                        alt="logo"
                    />
                    <h2>Kaliza</h2>
                </Link>
            </div>
            <div className={styles.mediaLinks}>
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