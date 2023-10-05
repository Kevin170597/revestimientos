import styles from "./page.module.css"
import { getClients } from "@/services"

const fetchClients = () => {
    return getClients()
}

export default async function Clientes() {
    const clients = await fetchClients()

    return (
        <div className={styles.clientes}>
            <div>
                <div className={styles.listHeader}>
                    <b className={styles.clientName}>Nombre</b>
                    <b className={styles.clientEmail}>Email</b>
                    <b className={styles.clientPhone}>Teléfono</b>
                </div>
                {clients?.map((client) =>
                    <div className={styles.client} key={client._id}>
                        <b className={styles.clientName}>{client.name}</b>
                        <p className={styles.clientEmail}>{client.email}</p>
                        <p className={styles.clientPhone}>{client.phone}</p>
                    </div>
                )}
            </div>
        </div>
    )
}