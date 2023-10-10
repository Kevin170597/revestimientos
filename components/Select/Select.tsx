import styles from "./Select.module.css"

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
        <div className={styles.container}>
            <label className={styles.label}>
                {label}
            </label>
            <div className={styles.selectContainer}>
                <p className={styles.symbol}>{symbol}</p>
                <select 
                name={name} 
                className={styles.select}
                {...register && register(name, { required: required ?? false })}>
                    {
                        options?.map((option, index) => (
                            <option key={index} value={option?.optionValue}>{option?.optionLabel}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}