import styles from "./Balance.module.css"
import { DonutChart } from "@/components"

interface Props {
    balance: { buy: number, sell: number, balance: number }
}

export const Balance = ({ balance }: Props) => {

    return (
        <div className={styles.balanceInfo}>
            <DonutChart
                data={[{ value: balance.sell, color: "#68e1cb" },
                { value: balance.buy, color: "#ea7554" }]}
            />
            <div className={styles.balanceNumbers}>
                <p className={styles.title}>Compra</p>
                <p className={styles.buyValue}>${balance.buy.toLocaleString("es-AR")}</p>
                <p className={styles.title}>Venta</p>
                <p className={styles.sellValue}>${balance.sell.toLocaleString("es-AR")}</p>
                <h1 className={balance.balance > 0 ? styles.balanceResultPositive : styles.balanceResultNegative}>
                    {balance.balance > 0 ? "+" : "-"}${Math.abs(balance.balance).toLocaleString("es-AR")}
                </h1>
            </div>
        </div>
    )
}