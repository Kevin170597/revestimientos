'use client'

import { useRouter } from "next/navigation"
import Image from "next/image"
import styles from "./Card.module.css"

interface Props {
    placa: {
        name: string,
        slug: string,
        image: string
    }
}

export default function Card({ placa }: Props) {
    const router = useRouter()

    return (
        <div className={styles.card} onClick={() => router.push(`/anti-humedad/${placa.slug}`)}>
            <div className={styles.pictureContainer}>
                <Image
                    className={styles.picture}
                    width={0}
                    height={0}
                    sizes="100vw"
                    src={placa.image}
                    alt="modelo"
                />
            </div>
            <b className={styles.cardTitle}>{placa.name}</b>
        </div>
    )
}