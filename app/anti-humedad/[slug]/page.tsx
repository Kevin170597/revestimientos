
import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.css"
import WhatsAppIcon from "../../../public/icons/wppicon.svg"
import { getAntiHumidityBySlug } from "@/services"
import { Display } from "@/components"

const fetchAntiHumidityBySlug = (slug: string) => {
    return getAntiHumidityBySlug(slug)
}

export const generateMetadata = async ({ params }: any) => {
    const antiHumidityBySlug = await fetchAntiHumidityBySlug(params.slug)
    return {
        title: `Antihumedad - ${antiHumidityBySlug.name}`
    }
}

export default async function Placa({ params }: { params: { slug: string } }) {
    const antiHumidityBySlug = await fetchAntiHumidityBySlug(params.slug)

    return (
        <div className={styles.detailContainer}>
            <div className={styles.detail}>
                <div className={styles.img}>
                    <Display img={["/models/mardelplata.png", "/models/sol.png", "/models/travertino.png"]} />
                </div>
                <div className={styles.info}>
                    <h2 className={styles.name}>Placa antihumedad</h2>
                    <h3 className={styles.title}>Modelo: {antiHumidityBySlug?.name}</h3>
                    <p className={styles.price}>${antiHumidityBySlug?.price.toLocaleString("es-AR")} m2</p>
                    <p className={styles.size}>Medidas: {antiHumidityBySlug?.width}cm x {antiHumidityBySlug?.height}cm</p>
                    <p className={styles.quantity}>Unidades por m2: {antiHumidityBySlug?.uxm2}</p>
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
        </div>
    )
}