import { getBalanceUSD } from "@/services"
import { Res, ResError } from "@/lib"

export async function GET() {
    try {
        const res = await getBalanceUSD()
        return Res(res, 200)
    } catch (error) {
        const { message } = error as Error
        return ResError(message, 500)
    }
}