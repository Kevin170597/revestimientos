import styles from "./page.module.css"
import { Form } from "@/components"
import { addRegister } from "@/services"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Registrar compra/venta'
}

export default function AddRegister() {

    const registerFormFields = [
        {
            type: "select",
            name: "type",
            label: "Tipo",
            required: true,
            options: [
                { optionValue: "buy", optionLabel: "Compra" },
                { optionValue: "sell", optionLabel: "Venta" }
            ]
        },
        {
            type: "select",
            name: "product",
            label: "Producto",
            required: true,
            options: [
                { optionValue: "Placas antihumedad", optionLabel: "Placas antihumedad" },
                { optionValue: "Yeso cerámico 40kg", optionLabel: "Yeso cerámico 40kg" },
                { optionValue: "Sella juntas 20kg", optionLabel: "Sella juntas 20kg" },
                { optionValue: "Sella juntas 4kg", optionLabel: "Sella juntas 4kg" },
                { optionValue: "Pegamento 30kg", optionLabel: "Pegamento 30kg" }
            ]
        },
        {
            type: "input",
            inputType: "number",
            name: "quantity",
            label: "Cantidad",
            required: true,
            placeholder: "0",
            errorMessage: "La cantidad debe ser mayor a 0."
        },
        {
            type: "select",
            name: "unit",
            label: "Unid",
            required: true,
            options: [
                { optionValue: "unid.", optionLabel: "Unid." },
                { optionValue: "m2", optionLabel: "m2" },
                { optionValue: "kg", optionLabel: "Kg" }
            ]
        },
        {
            type: "input",
            inputType: "number",
            name: "amount",
            label: "Monto total",
            symbol: "$",
            required: true,
            placeholder: "0",
            errorMessage: "El monto debe ser mayor a 0."
        },

    ]

    return (
        <div className="py-6 px-[10%]">
            <Form
                submitFunction={addRegister}
                fields={registerFormFields}
                pushTo="/admin/caja-registradora"
            />
        </div>
    )
}