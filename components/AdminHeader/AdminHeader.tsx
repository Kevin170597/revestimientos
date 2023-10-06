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
            },
            {
                path: "/admin/actividad",
                title: "Actividad"
            },
            {
                path: "/admin/clientes/agregar",
                title: "Guardar datos de cliente"
            }
        ]

        return paths.find(e => e.path === pathname)?.title
    }

    return (
        <header className={styles.header}>
            <h4>{convertPathName(pathname)}</h4>
        </header>
    )
}