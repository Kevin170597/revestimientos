
interface Props {
    label?: string,
    inputType?: string,
    placeholder?: string,
    register?: any,
    required?: boolean,
    errors?: any,
    errorMessage?: string,
    name?: string,
    symbol?: string
}

export const Input = (props: Props) => {
    const { label, inputType, placeholder, register, required, errors, errorMessage, name, symbol } = props

    return (
        <div className="flex flex-col">
            <label className="pl-1 text-font-black-1 text-sm">
                {label}
            </label>
            <small className="pl-1 text-[#da2828]">
                {errors && errors[name ? name : ""] ? errorMessage : ""}
            </small>
            <div className="flex items-center rounded border px-2 mt-3 mb-4" style={errors && errors[name ? name : ""] && { border: "solid 1px red" }}>
                <p className="text-sm text-font-black-1">{symbol}</p>
                <input
                    className="text-font-black-1 w-full px-2 rounded h-10 bg-inherit text-sm focus:outline-none placeholder:text-font-white-2"
                    type={inputType ?? "text"}
                    placeholder={placeholder ?? ""}
                    {...register && register(name, { required: required ?? false })}
                />
            </div>
        </div>
    )
}