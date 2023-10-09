import styles from "./page.module.css"
import type { Metadata } from "next"
import { getAllRegister, getBalance } from "@/services"
import Link from "next/link"
import { DonutChart } from "@/components"

export const metadata: Metadata = {
    title: "Caja registradora"
}

const fetchAllRegister = async () => {
    return getAllRegister()
}

const fetchBalance = async () => {
    return getBalance()
}

export default async function CashRegister() {
    const cashRegister = await fetchAllRegister()
    const balance = await fetchBalance()

    return (
        <div className={styles.cashRegister}>
            <div className={styles.balance}>
                <div className={styles.balanceInfo}>
                    <DonutChart
                        data={[{ value: balance.sell, color: "#2de39a" },
                        { value: balance.buy, color: "#e8681d" }]}
                    />
                    <div className={styles.balanceNumbers}>
                        <p className={styles.title}>Compra</p>
                        <p className={styles.buyValue}>${balance.buy.toLocaleString("es-AR")}</p>
                        <p className={styles.title}>Venta</p>
                        <p className={styles.sellValue}>${balance.sell.toLocaleString("es-AR")}</p>
                        <h1 className={balance.balance > 0 ? styles.balanceResultPositive : styles.balanceResultNegative}>
                            {balance.balance > 0 ? "+" : "-"}${balance.balance.toLocaleString("es-AR")}
                        </h1>
                    </div>
                </div>
                <Link
                    className={styles.goToRegisterForm}
                    href={"/admin/caja-registradora/registrar"}>
                    Registrar compra/venta
                </Link>
            </div>

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
                                <p>19/07/23</p>
                                <p>USD ${e.usd_amount} (${e.usd_blue}/$1)</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}