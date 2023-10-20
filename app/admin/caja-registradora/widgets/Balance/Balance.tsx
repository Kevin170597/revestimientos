import { DonutChart } from "@/components"

interface Props {
    balance: { buy: number, sell: number, balance: number }
}

export const Balance = ({ balance }: Props) => {

    return (
        <div className="flex">
            <DonutChart
                data={[{ value: balance.sell, color: "#68e1cb" },
                { value: balance.buy, color: "#ea7554" }]}
            />
            <div className="flex flex-col items-center justify-center w-[70%]">
                <p className="mb-1 text-font-black-1">Compra</p>
                <p className="mb-3 text-[#c40404] text-sm">${balance.buy.toLocaleString("es-AR")}</p>
                <p className="mb-1 text-font-black-1">Venta</p>
                <p className="mb-3 text-[#04c424] text-sm">${balance.sell.toLocaleString("es-AR")}</p>
                <h1 className={balance.balance > 0 ? "text-[#04c424]" : "text-[#c40404]"}>
                    {balance.balance > 0 ? "+" : "-"}${Math.abs(balance.balance).toLocaleString("es-AR")}
                </h1>
            </div>
        </div>
    )
}