import { getClients, addClient } from "@/services"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
    const key = request.nextUrl.searchParams.get("key")
    console.log(key)
    const res = await getClients(key ? key : "")
    return new Response(JSON.stringify(res))
}

export async function POST(request: Request) {
    const body = await request.json()
    const res = await addClient(body)
    return new Response(JSON.stringify(res))
}