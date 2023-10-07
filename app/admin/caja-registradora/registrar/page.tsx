import styles from "./page.module.css"
import { AddCashRegisterForm } from "@/components"

export default function AddRegister() {

    return (
        <div className={styles.cashRegister}>
            <AddCashRegisterForm />
        </div>
    )
}