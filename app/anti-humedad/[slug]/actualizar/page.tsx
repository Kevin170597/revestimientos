import styles from "./page.module.css"
import { getAntiHumidityBySlug } from "@/services/antihumedad.service"
import { UpdateForm } from "@/components/UpdateForm/UpdateForm"
import { updateAntihumidity } from "@/services/antihumedad.service"

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