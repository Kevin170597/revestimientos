'use client'
import { useState, Fragment } from "react"
import styles from "./OrderCalculator.module.css"
import Image from "next/image"
import WhatsAppIcon from "../../public/icons/wppicon.svg"

interface Props {
    price: number,
    antiHumidity: {
        id: number,
        name: string,
        image: string,
        slug: string
    }
}

export default function OrderCalculator({ price, antiHumidity }: Props) {
    const [counter, setCounter] = useState<number>(1)

    return (
        <Fragment>
            <div className={styles.counter}>
                <button
                    className={styles.subtract}
                    disabled={counter > 1 ? false : true}
                    onClick={() => setCounter(counter - 1)}>
                    -
                </button>
                <p className={styles.m2Counter}>{counter} m2</p>
                <button
                    className={styles.add}
                    onClick={() => setCounter(counter + 1)}>
                    +
                </button>
                <p className={styles.total}>
                    ${counter < 10 ? (price * counter) : ((price - 200) * counter)}
                </p>
            </div>
            <a
                className={styles.wppOrder}
                href={`https://wa.me/5491162087463?text=Hola, necesito ${counter} m2 de placas antihumedad modelo ${antiHumidity.name}.`}
                target="_blank">
                <Image 
                    src={WhatsAppIcon}
                    width={18}
                    height={18}
                    alt="whatsapp_icon"
                    className={styles.icon}
                />
                Pedir
            </a>
        </Fragment>
    )
}