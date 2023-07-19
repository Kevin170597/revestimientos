import Image from "next/image"
import styles from "./Header.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <Image
                className={styles.logo}
                width={35}
                height={35}
                src="/logo_v1white.png"
                alt="logo"
            />
            <h2>Placas antihumedad</h2>
        </header>
    )
}