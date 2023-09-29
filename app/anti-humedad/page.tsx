import styles from "./page.module.css"
import Card from "@/components/Card/Card"
import Image from "next/image"
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
            <Image
                className={styles.cover}
                width={0}
                height={0}
                sizes="100vw"
                src={"/cover-antihumedad2.png"}
                alt="portada"
            />
            <div className={styles.cardsList}>
                {antiHumidity?.map((e) =>
                    <Card placa={e} key={e._id} />
                )}
            </div>
        </div>
    )
}