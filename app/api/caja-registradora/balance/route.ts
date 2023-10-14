import { getBalance } from "@/services"
import { Res, ResError } from "@/lib"

export async function GET() {
    try {
        const res = await getBalance()
        return Res(res, 200)
    } catch (error) {
        const { message } = error as Error
        return ResError(message, 500)
    }
}