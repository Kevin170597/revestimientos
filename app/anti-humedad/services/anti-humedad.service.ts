
import { placas } from "@/placas/placas"

export const getAntiHumidity = () => {
    return placas;
}

export const getAntiHumidityBySlug = (slug: string) => {
    return placas.find(x => x.slug === slug)
}