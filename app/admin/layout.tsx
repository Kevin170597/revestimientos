import type { Metadata } from "next"
import { SideBar, AdminHeader } from "@/components"

export const metadata: Metadata = {
    title: "Admin Panel"
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="flex">
            <SideBar />
            <div className="w-full bg-bg-1">
                <AdminHeader />
                {children}
            </div>
        </div>
    )
}