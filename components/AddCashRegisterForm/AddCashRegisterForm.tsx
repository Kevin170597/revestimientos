"use client"
import styles from "./AddCashRegisterForm.module.css"
import { useForm, SubmitHandler } from "react-hook-form"
import { addRegister } from "@/services"

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

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)
        data.usd_amount = 0
        data.usd_blue = 0
        await addRegister(data)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label className={styles.label} htmlFor="type">Tipo</label>
            <select className={styles.input} id="type" {...register("type", { required: true })}>
                <option value="buy">Compra</option>
                <option value="sell">Venta</option>
            </select>
            <label className={styles.label} htmlFor="product">Producto</label>
            <select className={styles.input} id="product" {...register("product", { required: true })}>
                <option value="Placas antihumedad">Placas antihumedad</option>
                <option value="Yeso cerámico 40kg">Yeso cerámico 40kg</option>
                <option value="Sella juntas 20kg">Sella juntas 20kg</option>
                <option value="Pegamento 30kg">Pegamento 30kg</option>
            </select>
            <label className={styles.label} htmlFor="">Cantidad</label>
            <input className={styles.input} type="number" placeholder="0"
            {...register("quantity", { required: true })} />
            <label className={styles.label} htmlFor="unit">Unidad</label>
            <select className={styles.input} id="unit" {...register("unit", { required: true })}>
                <option value="unid.">Unid.</option>
                <option value="m2">m2</option>
                <option value="kg">kg</option>
            </select>
            <label className={styles.label} htmlFor="">Monto total</label>
            <input className={styles.input} type="number" placeholder="ARS 0"
            {...register("amount", { required: true })} />
            <input className={styles.submitButton} type="submit" />
        </form>
    )
}