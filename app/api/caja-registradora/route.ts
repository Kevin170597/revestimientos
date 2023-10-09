import { addRegister, getAllRegister } from "@/services"

export async function GET() {
    const res = await getAllRegister()
    return new Response(JSON.stringify(res))
}

export async function POST(request: Request) {
    const body = await request.json()
    const res = await addRegister(body)
    return new Response(JSON.stringify(res))
}