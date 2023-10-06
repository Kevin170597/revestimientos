import styles from "./page.module.css"
import { AddClientForm } from "@/components"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Guardar datos de cliente'
}

export default function ClientEmail() {

    return (
        <div className={styles.addClient}>
            <AddClientForm />
        </div>
    )
}