import styles from "./page.module.css"
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

export default async function Clientes({ params, searchParams }: { params?: {}, searchParams?: { key: string }}) {
    const clients = await fetchClients(searchParams?.key)

    return (
        <div className={styles.clientes}>
            <div className={styles.clientsActions}>
                <SearchInput />
                <Link className={styles.addClientButton} href={"/admin/clientes/agregar"}>Agregar cliente +</Link>
            </div>
            <div className={styles.listHeader}>
                <p className={styles.clientName}>Nombre</p>
                <p className={styles.clientEmail}>Email</p>
                <p className={styles.clientPhone}>Teléfono</p>
            </div>
            <div className={styles.clientList}>
                {clients?.map((client) =>
                    <div className={styles.client} key={client._id}>
                        <p className={styles.clientName}>{client.name}</p>
                        <p className={styles.clientEmail}>{client.email ? client.email : "-"}</p>
                        <p className={styles.clientPhone}>{client.phone ? client.phone : "-"}</p>
                    </div>
                )}
            </div>
        </div>
    )
}