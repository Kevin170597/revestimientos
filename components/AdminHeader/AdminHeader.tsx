"use client"
import { usePathname } from "next/navigation"
import styles from "./AdminHeader.module.css"

export const AdminHeader = () => {
    const pathname = usePathname()

    const convertPathName = (pathname: string) => {
        const paths = [
            {
                path: "/admin/clientes",
                title: "Clientes"
            },
            {
                path: "/admin",
                title: "Dashboard"
            }
        ]

        return paths.find(e => e.path === pathname)?.title
    }

    return (
        <header className={styles.header}>
            <h3>{convertPathName(pathname)}</h3>
        </header>
    )
}