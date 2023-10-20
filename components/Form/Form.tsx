"use client"
import { Input } from "../Input/Input"
import { Select } from "../Select/Select"
import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from "next/navigation"

interface Props {
    submitFunction: any,
    fields: Fields[],
    pushTo?: string
}

interface Fields {
    type?: string,
    inputType?: string,
    name?: string,
    label?: string,
    symbol?: string,
    required?: boolean,
    placeholder?: string,
    errors?: any,
    errorMessage?: string,
    register?: any,
    options?: { optionValue: string | number, optionLabel: string }[]
}

type Inputs = {
    type: string,
    product: string,
    quantity: number,
    unit: string,
    amount: number,
    usd_amount: number,
    usd_blue: number
}

export const Form = (props: Props) => {
    const { submitFunction, fields, pushTo } = props
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)
        submitFunction(data)
        pushTo ? router.push(pushTo) : null
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white rounded shadow-1 flex flex-col">
            {fields?.map((field, index) => {
                if (field.type === "input") {
                    return <Input
                        key={index}
                        inputType={field.inputType}
                        label={field.label}
                        name={field.name}
                        symbol={field.symbol}
                        required={field.required}
                        placeholder={field.placeholder}
                        errors={errors}
                        errorMessage={field.errorMessage}
                        register={register}
                    />
                } else if (field.type === "select") {
                    return <Select 
                        key={index}
                        name={field.name}
                        label={field.label}
                        required={field.required}
                        register={register}
                        options={field.options}
                    />
                }
            })}
            <input className="h-10 rounded bg-primary cursor-pointer" type="submit" />
        </form>
    )
}