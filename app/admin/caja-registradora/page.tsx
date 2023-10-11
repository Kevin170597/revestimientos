import styles from "./page.module.css"
import type { Metadata } from "next"
import { getAllRegister, getBalance, getBalanceUSD } from "@/services"
import Link from "next/link"
import { Balance, Activity } from "./widgets"
import moment from "moment"

export const metadata: Metadata = {
    title: "Caja registradora"
}

const fetchAllRegister = async () => {
    return getAllRegister()
}

const fetchBalance = async () => {
    return getBalance()
}

const fetchBalanceUSD = async () => {
    return getBalanceUSD()
}

export default async function CashRegister() {
    const cashRegister = await fetchAllRegister()
    const balance = await fetchBalance()
    const balanceUSD = await fetchBalanceUSD()

    return (
        <div className={styles.cashRegister}>
            <div className={styles.balance}>
                <Balance balance={balance} />
                <Balance balance={balanceUSD} />
                <Link
                    className={styles.goToRegisterForm}
                    href={"/admin/caja-registradora/registrar"}>
                    Registrar compra/venta
                </Link>
            </div>
            <Activity cashRegister={cashRegister} />
        </div>
    )
}