import styles from "./page.module.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Actividad"
}

export default function Activity() {

    const buyandsell = [
        {
            _id: 1,
            type: "buy",
            product: "Yeso ceramico 40kg",
            quantity: 10,
            unit: "unid.",
            amount: 25800,
            createdAt: "19/07/23",
            usd: {
                amount: 49.14,
                blue: 525
            }
        },
        {
            _id: 2,
            type: "sell",
            product: "Placas Antihumedad",
            quantity: 10,
            unit: "m2.",
            amount: 25000,
            createdAt: "19/07/23",
            usd: {
                amount: 29.79,
                blue: 839
            }
        }
    ]

    return (
        <div className={styles.inventario}>
            <div className={styles.activity}>
                <h4 className={styles.activityTitle}>Actividad</h4>
                {buyandsell?.map((e) =>
                    <div key={e._id} className={styles.activityCard}>
                        <div className={styles.product}>
                            <b
                                className={e.type === "buy" ? styles.buy : styles.sell}>
                                {e.type === "buy" ? "+" : "-"}
                            </b>
                            <p>{e.product} {`(${e.quantity} ${e.unit})`}</p>
                            <p
                                className={`${styles.amount} ${e.type === "buy" ? styles.negative : styles.positive}`}>
                                {`${e.type === "buy" ? "-" : "+"}$${e.amount.toLocaleString("es-AR")}`}
                            </p>
                        </div>
                        <div className={styles.extra}>
                            <p>19/07/23</p>
                            <p>USD ${e.usd.amount} (${e.usd.blue}/$1)</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}