"use client"
import { getClients } from "@/services"
import { useRouter } from "next/navigation"
import { useForm, SubmitHandler } from "react-hook-form"

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
        <form className="flex" onSubmit={handleSubmit(onSubmit)}>
            <input
                className="px-4 bg-white shadow-1 text-font-black-1 rounded-l placeholder:text-font-black-1 focus:outline-none"
                type="text"
                {...register("key")}
                placeholder="Buscar..."
            />
            <button className="bg-primary px-4 cursor-pointer shadow-1 rounded-r" type="submit">Buscar</button>
        </form>
    )
}