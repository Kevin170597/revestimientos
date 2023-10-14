import { getClients, addClient } from "@/services"
import { NextRequest } from "next/server"
import { Res, ResError } from "@/lib"

export async function GET(request: NextRequest) {
    try {
        const key = request.nextUrl.searchParams.get("key")
        const res = await getClients(key ? key : "")
        return Res(res, 200)
    } catch (error) {
        
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const res = await addClient(body)
        return Res(res, 200)
    } catch (error) {
        const { message } = error as Error
        return ResError(message, 500)
    }
}