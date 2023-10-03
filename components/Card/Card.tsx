'use client'

import { useRouter } from "next/navigation"
import Image from "next/image"
import styles from "./Card.module.css"
import { AntiHumedad } from "@/interfaces"

interface Props {
    placa: AntiHumedad
}

export const Card = ({ placa }: Props) => {
    const router = useRouter()

    return (
        <div className={styles.card} onClick={() => router.push(`/anti-humedad/${placa.slug}`)}>
            <div className={styles.pictureContainer}>
                <Image
                    className={styles.picture}
                    width={0}
                    height={0}
                    sizes="100vw"
                    src={`/models/${placa.image}`}
                    alt="modelo"
                />
            </div>
            <h2 className={styles.cardTitle}>{placa.name}</h2>
            <h1 className={styles.cardPrice}>${placa.price.toLocaleString("es-AR")} m2</h1>
        </div>
    )
}