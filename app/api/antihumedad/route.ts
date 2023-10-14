import { getAntiHumidity } from "@/services"
import { Res, ResError } from "@/lib"

export async function GET() {
    try {
        const res = await getAntiHumidity()
        return Res(res, 200)
    } catch (error) {
        const { message } = error as Error
        return ResError(message, 500)
    }
}