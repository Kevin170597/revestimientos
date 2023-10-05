import styles from "./page.module.css"
import { getAntiHumidityBySlug } from "@/services"
import { UpdateForm } from "@/components"

const fetchAntihumidityBySlug = (slug: string) => {
    return getAntiHumidityBySlug(slug)
}

export default async function Update({ params }: { params: { slug: string } }) {
    const antihumidityBySluga = await fetchAntihumidityBySlug(params.slug)

    return (
        <div className={styles.update}>
            <h3 className={styles.title}>Actualzar </h3>
            <UpdateForm placa={antihumidityBySluga} />
        </div>
    )
}