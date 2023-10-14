import { getAntiHumidityBySlug, updateAntihumidity } from "@/services"
import { Res, ResError } from "@/lib"

export async function GET(request: Request, { params }: { params: { slug: string } }) {
    try {
        const res = await getAntiHumidityBySlug(params.slug)
        if (res === undefined) return ResError("not found", 404)
        return Res(res, 200)
    } catch (error) {
        const { message } = error as Error
        return ResError(message, 500)
    }
}

export async function PUT(request: Request, { params }: { params: { slug: string } }) {
    try {
        const body = await request.json()
        const res = await updateAntihumidity(params.slug, body)
        return Res(res, 200)
    } catch (error) {
        const { message } = error as Error
        return ResError(message, 500)
    }
}