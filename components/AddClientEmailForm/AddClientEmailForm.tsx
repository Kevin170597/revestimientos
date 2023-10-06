"use client"
import styles from "./AddClientEmailFrom.module.css"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    name: string,
    email: string,
    phone: number
}

export const AddClientEmailForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label className={styles.label} htmlFor="name">Nombre</label>
            <input
                id="name"
                className={`${styles.input} ${errors.name && styles.error}`}
                placeholder="Nombre o apellido..."
                {...register("name", { required: true })}
            />
            <label className={styles.label} htmlFor="email">Email</label>
            <small className={styles.small}>{errors.email?.message && errors.email.message}</small>
            <input
                id="email"
                className={`${styles.input} ${errors.email && styles.error}`}
                placeholder="Ej: nombre@gmail.com"
                {...register("email", {
                    pattern: {
                        value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                        message: "Formato inválido."
                    }
                })}
            />
            <label className={styles.label} htmlFor="phone">Teléfono</label>
            <input
                id="phone"
                className={`${styles.input} ${errors.phone && styles.error}`}
                placeholder="Ej: 1122334455"
                {...register("phone")}
            />
            <input className={styles.submitButton} type="submit" />
        </form>
    )
}