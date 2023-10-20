import moment from "moment"
import { CashRegister } from "@/interfaces"

interface Props {
    cashRegister: CashRegister[]
}

export const Activity = ({ cashRegister }: Props) => {

    return (
        <div className="w-[50%] bg-white rounded shadow-1">
            <h4 className="px-4 h-10 flex items-center border-b text-font-black-1">Actividad</h4>
            <div className="flex flex-col-reverse">
                {cashRegister?.map((e) =>
                    <div key={e._id} className="p-4 border-b">
                        <div className="flex items-center mb-3">
                            <p className="mr-3 text-font-black-1">{e.type === "buy" ? "Compra" : "Venta"}</p>
                            <p>{e.product} {`(${e.quantity} ${e.unit})`}</p>
                            <p
                                className={`ml-auto ${e.type === "buy" ? "text-[#414074]" : "text-[#05c545]"}`}>
                                {`${e.type === "buy" ? "-" : "+"}$${e.amount.toLocaleString("es-AR")}`}
                            </p>
                        </div>
                        <div className="flex justify-between text-font-black-1">
                            <p>{moment(e.createdAt).format("D/M/YY")}</p>
                            <p>USD ${e.usd_amount} (${e.usd_blue}/$1)</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}