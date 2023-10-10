"use client"

import styles from "./SearchInput.module.css"
import { getClients } from "@/services"
import { useRouter } from "next/navigation"
import { useForm, SubmitHandler } from "react-hook-form"
import { Input } from "../Input/Input"

type Inputs = {
    key: string
}

export const SearchInput = () => {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        //console.log(data)
        await getClients(data.key)
        router.push(`/admin/clientes?key=${data.key}`)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input className={styles.input} type="text" {...register("key")} placeholder="Buscar..." />
            <button className={styles.searchButton} type="submit">Buscar</button>
        </form>
    )
}