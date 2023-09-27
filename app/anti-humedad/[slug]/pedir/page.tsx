import { getAntiHumidityBySlug } from "../../services/anti-humedad.service"
import styles from "./page.module.css"
import Image from "next/image"
import OrderCalculator from "@/components/OrderCalculator/OrderCalculator"

const fetchAntiHumidityBySlug = (slug: string) => {
    return getAntiHumidityBySlug(slug)
}

export default async function Order({ params }: { params: { slug: string } }) {
    const antiHumidityBySlug = await fetchAntiHumidityBySlug(params.slug)

    return (
        <div className={styles.orderContainer}>
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
            <h3 className={styles.name}>{antiHumidityBySlug?.name}</h3>
            <p className={styles.question}>¿Cuántos m2 necesitas?</p>
            {antiHumidityBySlug &&
                <OrderCalculator price={antiHumidityBySlug.price} antiHumidity={antiHumidityBySlug} />
            }
        </div>
    )
}