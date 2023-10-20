"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export const SideBar = () => {
    const pathname = usePathname()

    return (
        <nav className="bg-primary h-[100vh] w-[25vw] py-4">
            <div className="flex items-center px-4 mb-6">
                <Image
                    className="rounded-full mr-4"
                    width={30}
                    height={30}
                    src="/logo_v1white.png"
                    alt="logo"
                />
                <h3>Kaliza</h3>
            </div>
            <Link
                className={`mb-2 px-4 h-10 flex items-center ${pathname === "/admin" ? "border-white border-r-4 border-solid bg-primary-light" : ""}`}
                href={"/admin"}
            >
                Dashboard
            </Link>
            <Link
                className={`$mb-2 px-4 h-10 flex items-center ${pathname === "/admin/tienda" ? "border-white border-r-4 border-solid bg-primary-light" : ""}`}
                href={"/admin/tienda"}>
                Tienda
            </Link>
            <Link
                className={`$mb-2 px-4 h-10 flex items-center ${pathname.includes("/admin/caja-registradora") ? "border-white border-r-4 border-solid bg-primary-light" : ""}`}
                href={"/admin/caja-registradora"}>
                Caja registradora
            </Link>
            <Link
                className={`mb-2 px-4 h-10 flex items-center ${pathname.includes("/admin/clientes") ? "border-white border-r-4 border-solid bg-primary-light" : ""}`}
                href={"/admin/clientes"}>
                Clientes
            </Link>
        </nav>
    )
}