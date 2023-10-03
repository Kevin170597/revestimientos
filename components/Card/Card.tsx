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

    const priceWithDiscount = (price: number, discount: number) => {
        return (price - (price * discount / 100))
    }

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
            <p style={{ textDecoration: "line-through", color: "#c8c8c8" }}>
                {placa.discount > 0 ? `$${placa.price.toLocaleString("es-AR")}` : ""}
            </p>
            <div className={styles.cardPriceContainer}>
                <h1 className={styles.cardPrice}>
                    {placa.discount > 0 ?
                        `$${priceWithDiscount(placa.price, placa.discount).toLocaleString("es-AR")} m2`
                        :
                        `$${placa.price.toLocaleString("es-AR")} m2`
                    }
                </h1>
                <p className={styles.discount}>{placa.discount > 0 ? `${placa.discount}% OFF` : ""}</p>
            </div>
        </div>
    )
}