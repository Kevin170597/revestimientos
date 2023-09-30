import styles from "./page.module.css"
import Card from "@/components/Card/Card"
import type { Metadata } from 'next'
import { getAntiHumidity } from "./services/anti-humedad.service"

export const metadata: Metadata = {
    title: 'Kaliza - Placas antihumedad'
}

const fetchAntiHumidity = () => {
    return getAntiHumidity()
}

export default async function AntiHumidity() {
    const antiHumidity = await fetchAntiHumidity()

    return (
        <div className={styles.antiHumidity}>
            <div className={styles.coverContainer}>
                <h1 className={styles.title}>Placas antihumedad</h1>
            </div>
            <div className={styles.cardsList}>
                {antiHumidity?.map((e) =>
                    <Card placa={e} key={e._id} />
                )}
            </div>
        </div>
    )
}