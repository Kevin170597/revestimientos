import styles from "./page.module.css"
import Card from "@/components/Card/Card"
import Image from "next/image"
import { getAntiHumidity } from "./services/anti-humedad.service"

const fetchAntiHumidity = () => {
    return getAntiHumidity()
}

export default function AntiHumidity() {
    const antiHumidity = fetchAntiHumidity()

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
                {antiHumidity.map((e) =>
                    <Card placa={e} key={e.id} />
                )}
            </div>
        </div>
    )
}