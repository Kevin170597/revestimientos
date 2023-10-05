"use client"

import styles from "./SideBar.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const SideBar = () => {
    const pathname = usePathname()

    return (
        <nav className={styles.nav}>
            <Link
                className={`${styles.link} ${pathname === "/admin" ? styles.active : ""}`}
                href={"/admin"}
            >
                Dashboard
            </Link>
            <Link
                className={`${styles.link} ${pathname === "/admin/clientes" ? styles.active : ""}`}
                href={"/admin/clientes"}>
                Clientes
            </Link>
        </nav>
    )
}