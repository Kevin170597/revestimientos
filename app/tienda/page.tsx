import styles from "./page.module.css"
import Link from "next/link"

export default function StoreHome() {

    return (
        <div>
            <h1>Store home</h1>
            <Link href={"/tienda/anti-humedad"}>Antihumedad</Link>
        </div>
    )
}