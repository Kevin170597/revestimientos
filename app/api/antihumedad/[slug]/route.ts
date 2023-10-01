import { getAntiHumidityBySlug, updateAntihumidity } from "@/services"

export async function GET(request: Request, { params }: { params: { slug: string } }) {
    try {
        const res = await getAntiHumidityBySlug(params.slug)
        if (res === undefined) throw new Error("Not found.")
        return new Response(JSON.stringify(res), { status: 200 })
    } catch (error) {
        let message
        if (error instanceof Error) message = error.message
        return new Response(JSON.stringify({ error: message }), { status: 404 })
    }
}

export async function PUT(request: Request, { params }: { params: { slug: string } }) {
    const body = await request.json()
    console.log(18, body)
    const res = await updateAntihumidity(params.slug, body)
    return new Response(JSON.stringify(res), { status: 200 })
}