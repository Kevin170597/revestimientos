import styles from "./page.module.css"
import { getAntiHumidityBySlug } from "@/services"

const fetchAntiHumidityBySlug = (slug: string) => {
    return getAntiHumidityBySlug(slug)
}

export default async function UpdateProduct({ params }: { params: { slug: string } }) {
    const antiHumidityBySlug = await fetchAntiHumidityBySlug(params.slug)

    return (
        <div className={styles.update}>
            <form className={styles.form}>
                <div className={styles.data}>
                    <label className={styles.label} htmlFor="name">Nombre</label>
                    <input id="name" className={styles.input} type="text" defaultValue={"Mar del Plata"} />
                    <label className={styles.label} htmlFor="price">Precio</label>
                    <input id="price" className={styles.input} defaultValue={2500} />
                </div>
                <div className={styles.images}></div>
            </form>
        </div>
    )
}