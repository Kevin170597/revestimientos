"use client"
import styles from "./AddCashRegisterForm.module.css"
import { useForm, SubmitHandler } from "react-hook-form"
import { addRegister } from "@/services"
import { useRouter } from "next/navigation"
import { Input } from "../Input/Input"
import { Select } from "../Select/Select"

type Inputs = {
    type: "buy" | "sell",
    product: string,
    quantity: number,
    unit: string,
    amount: number,
    usd_amount: number,
    usd_blue: number
}

export const AddCashRegisterForm = () => {
    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)
        data.usd_amount = 0
        data.usd_blue = 0
        //await addRegister(data)
        //router.push("/admin/caja-registradora")
    }

    let typeOptions = [
        { optionValue: "buy", optionLabel: "Compra" },
        { optionValue: "sell", optionLabel: "Venta" }
    ]

    let productOptions = [
        { optionValue: "Placas antihumedad", optionLabel: "Placas antihumedad" },
        { optionValue: "Yeso cerámico 40kg", optionLabel: "Yeso cerámico 40kg" },
        { optionValue: "Sella juntas 20kg", optionLabel: "Sella juntas 20kg" },
        { optionValue: "Pegamento 30kg", optionLabel: "Pegamento 30kg" }
    ]

    let unitOptions = [
        { optionValue: "unid.", optionLabel: "Unid." },
        { optionValue: "m2", optionLabel: "m2" },
        { optionValue: "kg", optionLabel: "Kg" }
    ]

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Select
                register={register}
                required={true}
                name="type"
                label="Tipo"
                options={typeOptions}
            />
            <Select
                register={register}
                required={true}
                name="product"
                label="Producto"
                options={productOptions}
            />
            <Input
                inputType="number"
                register={register}
                required={true}
                errors={errors}
                name="quantity"
                label="Cantidad"
                placeholder="0"
            />
            <Select
                register={register}
                required={true}
                name="unit"
                label="Unid."
                options={unitOptions}
            />
            <Input
                inputType="number"
                register={register}
                required={true}
                errors={errors}
                errorMessage="El monto debe ser mayor a 0."
                name="amount"
                label="Monto total"
                symbol="$"
                placeholder="0"
            />
            <input className={styles.submitButton} type="submit" />
        </form>
    )
}