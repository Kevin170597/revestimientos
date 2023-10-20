import { getClients } from "@/services"
import Link from "next/link"
import type { Metadata } from "next"
import { SearchInput } from "@/components"

export const metadata: Metadata = {
    title: "Clientes"
}

const fetchClients = (params?: string) => {
    return getClients(params)
}

export default async function Clientes({ params, searchParams }: { params?: {}, searchParams?: { key: string } }) {
    const clients = await fetchClients(searchParams?.key)

    return (
        <div className="py-4 px-8">
            <div className="flex justify-between">
                <SearchInput />
                <Link
                    className="flex items-center w-fit h-10 bg-primary rounded px-3"
                    href={"/admin/clientes/agregar"}>
                    Agregar cliente +
                </Link>
            </div>
            <div className="flex items-center px-4 mt-4 mb-5 h-10 rounded bg-white shadow-1">
                <p className="w-1/3 text-font-black-1 text-sm">Nombre</p>
                <p className="w-1/3 text-font-black-1 text-sm">Email</p>
                <p className="w-1/3 text-font-black-1 text-sm">Teléfono</p>
            </div>
            <div className="bg-white rounded flex flex-col-reverse shadow-1">
                {clients?.map((client) =>
                    <div className="flex items-center px-4 h-10 border-b" key={client._id}>
                        <p className="w-1/3 text-font-black-1 text-sm">{client.name}</p>
                        <p className="w-1/3 text-font-black-1 text-sm">{client.email ? client.email : "-"}</p>
                        <p className="w-1/3 text-font-black-1 text-sm">{client.phone ? client.phone : "-"}</p>
                    </div>
                )}
            </div>
        </div>
    )
}