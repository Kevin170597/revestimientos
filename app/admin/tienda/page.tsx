import styles from "./page.module.css"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Tienda"
}

export default function () {

    return (
        <div className={styles.tienda}>
            <div className={styles.productList}>
                <div className={styles.product}>
                    <Image
                        className={styles.picture}
                        width={60}
                        height={60}
                        src={"/models/mardelplata.png"}
                        alt="foto"
                    />
                    <div className={styles.nameContainer}>
                        <p className={styles.id}>65149b466bb65951fc335cad</p>
                        <Link href={`/admin/tienda/${"mardelplata"}`}>Mar del Plata</Link>
                    </div>
                    <div className={styles.priceContainer}>
                        <p>$2.500</p>
                    </div>
                    <div className={styles.quantityContainer}>
                        <p className={styles.available}>Disponible</p>
                        <p>15 m2</p>
                    </div>
                </div>
                <div className={styles.product}>
                    <Image
                        className={styles.picture}
                        width={60}
                        height={60}
                        src={"/models/mardelplata.png"}
                        alt="foto"
                    />
                    <div className={styles.nameContainer}>
                        <p className={styles.id}>65149b466bb65951fc335cad</p>
                        <Link href={`/admin/tienda/${"65149b466bb65951fc335cad"}`}>Mar del Plata</Link>
                    </div>
                    <div className={styles.priceContainer}>
                        <p>$2.500</p>
                    </div>
                    <div className={styles.quantityContainer}>
                        <p className={styles.available}>Disponible</p>
                        <p>15 m2</p>
                    </div>
                </div>
                <div className={styles.product}>
                    <Image
                        className={styles.picture}
                        width={60}
                        height={60}
                        src={"/models/mardelplata.png"}
                        alt="foto"
                    />
                    <div className={styles.nameContainer}>
                        <p className={styles.id}>65149b466bb65951fc335cad</p>
                        <Link href={`/admin/tienda/${"65149b466bb65951fc335cad"}`}>Mar del Plata</Link>
                    </div>
                    <div className={styles.priceContainer}>
                        <p>$2.500</p>
                    </div>
                    <div className={styles.quantityContainer}>
                        <p className={styles.available}>Disponible</p>
                        <p>15 m2</p>
                    </div>
                </div>
            </div>
        </div>
    )
}