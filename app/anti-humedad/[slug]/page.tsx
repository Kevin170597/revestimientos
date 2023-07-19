
import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.css"
import WhatsAppIcon from "../../../public/icons/wppicon.svg"
import { getAntiHumidityBySlug } from "../services/anti-humedad.service"

const fetchAntiHumidityBySlug = (slug: string) => {
    return getAntiHumidityBySlug(slug)
}

export default function Placa({ params }: { params: { slug: string } }) {
    const antiHumidityBySlug = fetchAntiHumidityBySlug(params.slug)

    return (
        <div className={styles.detailContainer}>
            <div className={styles.detail}>
                <div className={styles.pictureContainer}>
                    {antiHumidityBySlug &&
                        <Image
                            className={styles.picture}
                            width={0}
                            height={0}
                            sizes="100vw"
                            src={antiHumidityBySlug?.image}
                            alt="modelo"
                        />
                    }
                </div>
                <div className={styles.info}>
                    <h3 className={styles.title}>{antiHumidityBySlug?.name}</h3>
                    <p className={styles.price}>${antiHumidityBySlug?.price} m2</p>
                    <p className={styles.size}>Medidas: {antiHumidityBySlug?.size}</p>
                    <p className={styles.quantity}>Unidades por m2: 8</p>
                </div>
            </div>
            <div>
                <Link
                className={styles.wppButton} 
                href={`/anti-humedad/${params.slug}/pedir`}>
                    <Image
                        src={WhatsAppIcon}
                        width={18}
                        height={18}
                        alt="whatsapp_icon"
                        className={styles.icon}
                    />
                    Pedir por WhatsApp
                </Link>
            </div>
        </div>
    )
}