
interface Props {
    inputType?: string,
    label?: string,
    symbol?: string,
    register?: any,
    required?: boolean,
    name?: string,
    options?: { optionValue: string | number, optionLabel: string }[]
}

export const Select = (props: Props) => {
    const { label, symbol, name, register, required, options } = props

    return (
        <div className="flex flex-col">
            <label className="pl-1 text-font-black-1 text-sm">
                {label}
            </label>
            <div className="flex items-center border rounded h-10 px-2 mt-3 mb-4">
                <p className="text-sm text-font-black-1">{symbol}</p>
                <select
                    name={name}
                    className="w-full text-font-black-1 bg-inherit px-2 text-sm focus:outline-none"
                    {...register && register(name, { required: required ?? false })}>
                    {
                        options?.map((option, index) => (
                            <option key={index} value={option?.optionValue}>{option?.optionLabel}</option>
                        ))
                    }
                </select>
            </div>
        </div >
    )
}