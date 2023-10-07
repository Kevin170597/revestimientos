"use client"

import styles from "./SideBar.module.css"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export const SideBar = () => {
    const pathname = usePathname()

    return (
        <nav className={styles.nav}>
            <div className={styles.logoContainer}>
                <Image
                    className={styles.logo}
                    width={30}
                    height={30}
                    src="/logo_v1white.png"
                    alt="logo"
                />
                <h3>Kaliza</h3>
            </div>
            <Link
                className={`${styles.link} ${pathname === "/admin" ? styles.active : ""}`}
                href={"/admin"}
            >
                Dashboard
            </Link>
            <Link
                className={`${styles.link} ${pathname === "/admin/tienda" ? styles.active : ""}`}
                href={"/admin/tienda"}>
                Tienda
            </Link>
            <Link
                className={`${styles.link} ${pathname === "/admin/actividad" ? styles.active : ""}`}
                href={"/admin/actividad"}>
                Actividad
            </Link>
            <Link
                className={`${styles.link} ${pathname.includes("/admin/clientes") ? styles.active : ""}`}
                href={"/admin/clientes"}>
                Clientes
            </Link>
        </nav>
    )
}