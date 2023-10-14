import { addRegister, getAllRegister } from "@/services"
import { Res, ResError } from "@/lib"

export async function GET() {
    try {
        const res = await getAllRegister()
        return Res(res, 200)
    } catch (error) {
        const { message } = error as Error
        return ResError(message, 500)
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const res = await addRegister(body)
        return Res(res, 200)
    } catch (error) {
        const { message } = error as Error
        return ResError(message, 500)
    }
}