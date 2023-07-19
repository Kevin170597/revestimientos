import styles from "./page.module.css"
import Card from "@/components/Card/Card"
import { getAntiHumidity } from "./services/anti-humedad.service"

const fetchAntiHumidity = () => {
    return getAntiHumidity()
}

export default function AntiHumidity() {
    const antiHumidity = fetchAntiHumidity()
    
    return (
        <div className={styles.antiHumidity}>
            <div className={styles.cardsList}>
                {antiHumidity.map((e) =>
                    <Card placa={e} key={e.id} />
                )}
            </div>
        </div>
    )
}