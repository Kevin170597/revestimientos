"use client"
import { usePathname } from "next/navigation"
import { signOut, useSession } from "next-auth/react"

export const AdminHeader = () => {
    const pathname = usePathname()
    const { data: session } = useSession()

    const convertPathName = (pathname: string) => {
        const paths = [
            {
                path: "/admin/clientes",
                title: "Clientes"
            },
            {
                path: "/admin/clientes/agregar",
                title: "Guardar datos de cliente"
            },
            {
                path: "/admin",
                title: "Dashboard"
            },
            {
                path: "/admin/caja-registradora",
                title: "Caja registradora"
            },
            {
                path: "/admin/caja-registradora/registrar",
                title: "Registrar compra/venta"
            },
            {
                path: "/admin/tienda",
                title: "Tienda"
            }
        ]

        return paths.find(e => e.path === pathname)?.title
    }

    return (
        <header className="bg-primary h-[8vh] flex justify-between items-center px-6 shadow-1">
            <h4>{convertPathName(pathname)}</h4>
            {session?.user &&
                <button
                    onClick={() => signOut()}
                    className="flex items-center border rounded-full cursor-pointer h-10 p-1 gap-4 hover:bg-primary-light transition-colors duration-500">
                    <img
                        className="w-8 h-8 rounded-full"
                        src={session?.user?.image as string}
                        alt="profile"
                    />
                    <p className="mr-4">{session?.user?.name}</p>
                </button>
            }
        </header>
    )
}