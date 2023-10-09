import styles from "./Input.module.css"

interface Props {
    label?: string,
    inputType?: "text" | "number",
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
        <div className={styles.container}>
            <label className={styles.label}>
                {label}
            </label>
            <small className={styles.small}>
                {errors && errors[name ? name : ""] ? errorMessage : ""}
            </small>
            <div className={styles.inputContainer} style={errors && errors[name ? name : ""] && { border: "solid 1px red" }}>
                <p className={styles.symbol}>{symbol}</p>
                <input
                    className={styles.input}
                    type={inputType ?? "text"}
                    placeholder={placeholder ?? ""}
                    {...register && register(name, { required: required ?? false })}
                />
            </div>
        </div>
    )
}