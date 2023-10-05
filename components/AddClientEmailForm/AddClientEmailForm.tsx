"use client"
import styles from "./AddClientEmailFrom.module.css"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    name: string,
    email: string
}

export const AddClientEmailForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input
                className={styles.input}
                placeholder="Nombre"
                {...register("name", { required: true })}
            />
            <input
                className={styles.input}
                placeholder="Email"
                {...register("email", { required: true })}
            />
            <input className={styles.submitButton} type="submit" />
        </form>
    )
}