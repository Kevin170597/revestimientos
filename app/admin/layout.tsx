import type { Metadata } from "next"
import styles from "./layout.module.css"
import { SideBar, AdminHeader } from "@/components"

export const metadata: Metadata = {
    title: "Admin Panel"
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className={styles.container}>
            <SideBar />
            <div className={styles.panel}>
                <AdminHeader />
                {children}
            </div>
        </div>
    )
}