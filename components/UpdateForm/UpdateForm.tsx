"use client"

import styles from "./UpdateForm.module.css"
import { useForm, SubmitHandler } from "react-hook-form"
import { updateAntihumidity } from "@/services"
import { AntiHumedad } from "@/interfaces"

type Inputs = {
    name: string,
    width: number,
    height: number,
    uxm2: number,
    price: number,
    discount: number
}

interface Props {
    placa: AntiHumedad
}

export const UpdateForm = ({ placa }: Props) => {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        await updateAntihumidity(placa.slug, data)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label className={styles.label} htmlFor="name">Modelo</label>
            <input
                id="name"
                className={styles.input}
                defaultValue={placa.name}
                {...register("name", { required: true })}
            />
            {errors.name && <span>Model name is required</span>}
            <label className={styles.label} htmlFor="price">Precio m2</label>
            <input
                id="price"
                className={styles.input}
                defaultValue={placa.price}
                {...register("price", { required: true })}
            />
            {errors.price && <span>Price is required</span>}
            <label className={styles.label} htmlFor="discount">Descuento</label>
            <input
                id="discount"
                className={styles.input}
                defaultValue={placa.discount}
                {...register("discount", { required: true })}
            />
            {errors.price && <span>Price is required</span>}
            <label className={styles.label}>Medidas</label>
            <div className={styles.sizesContainer}>
                <div className={styles.width}>
                    <input
                        className={`${styles.input} ${styles.sizeInput}`}
                        defaultValue={placa.width}
                        {...register("width", { required: true })}
                    />
                    <p className={styles.cm}>cm x</p>
                </div>
                <div className={styles.height}>
                    <input
                        className={`${styles.input} ${styles.sizeInput}`}
                        defaultValue={placa.height}
                        {...register("height", { required: true })}
                    />
                    <p className={styles.cm}>cm</p>
                </div>
            </div>
            <label className={styles.label} htmlFor="uxm2">Unidades por m2</label>
            <input
                id="uxm2"
                className={styles.input}
                defaultValue={placa.uxm2}
                {...register("uxm2", { required: true })}
            />
            {errors.uxm2 && <span>UxM2 is required</span>}

            <input className={styles.submitButton} type="submit" />
        </form>
    )
}