import styles from "./Activity.module.css"
import moment from "moment"
import { CashRegister } from "@/interfaces"

interface Props {
    cashRegister: CashRegister[]
}

export const Activity = ({ cashRegister }: Props) => {

    return (
        <div className={styles.activity}>
            <h4 className={styles.activityTitle}>Actividad</h4>
            <div className={styles.activityList}>
                {cashRegister?.map((e) =>
                    <div key={e._id} className={styles.activityCard}>
                        <div className={styles.product}>
                            <p className={styles.type}>{e.type === "buy" ? "Compra" : "Venta"}</p>
                            <p>{e.product} {`(${e.quantity} ${e.unit})`}</p>
                            <p
                                className={`${styles.amount} ${e.type === "buy" ? styles.negative : styles.positive}`}>
                                {`${e.type === "buy" ? "-" : "+"}$${e.amount.toLocaleString("es-AR")}`}
                            </p>
                        </div>
                        <div className={styles.extra}>
                            <p>{moment(e.createdAt).format("D/M/YY")}</p>
                            <p>USD ${e.usd_amount} (${e.usd_blue}/$1)</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}