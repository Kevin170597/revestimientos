"use client"

import styles from "./UpdateForm.module.css"
import { useForm, SubmitHandler } from "react-hook-form"
import { updateAntihumidity } from "@/services/antihumedad.service"

type Inputs = {
    name: string,
    price: number,
    size: string,
    uxm2: number
}

interface Props {
    placa: {
        name: string,
        slug: string,
        image: string,
        price: number
        size: string
    }
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
            <label className={styles.label} htmlFor="size">Medidas</label>
            <input
                id="size"
                className={styles.input}
                defaultValue={placa.size}
                {...register("size", { required: true })}
            />
            {errors.size && <span>Size is required</span>}
            <label className={styles.label} htmlFor="uxm2">Unidades por m2</label>
            <input
                id="uxm2"
                className={styles.input}
                defaultValue={8}
                {...register("uxm2", { required: true })}
            />
            {errors.uxm2 && <span>UxM2 is required</span>}

            <input className={styles.submitButton} type="submit" />
        </form>
    )
}