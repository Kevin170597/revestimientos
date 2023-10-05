import { getClients, addClient } from "@/services"

export async function GET() {
    const res = await getClients()
    return new Response(JSON.stringify(res))
}

export async function POST(request: Request) {
    const body = await request.json()
    const res = await addClient(body)
    return new Response(JSON.stringify(res))
}