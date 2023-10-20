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
        <div className="p-4 h-[92vh] text-sm flex items-start justify-between overflow-y-auto">
            <div className="w-[48%] bg-white rounded shadow-1 p-4">
                <Balance balance={balance} />
                <Balance balance={balanceUSD} />
                <Link
                    className="bg-primary h-10 px-4 flex justify-center items-center rounded text-white"
                    href={"/admin/caja-registradora/registrar"}>
                    Registrar compra/venta
                </Link>
            </div>
            <Activity cashRegister={cashRegister} />
        </div>
    )
}