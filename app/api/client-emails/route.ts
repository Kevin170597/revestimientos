import { getClientsEmails, saveClientsEmails } from "@/services"

export async function GET() {
    const res = await getClientsEmails()
    return new Response(JSON.stringify(res))
}

export async function POST(request: Request) {
    const body = await request.json()
    const res = await saveClientsEmails(body)
    return new Response(JSON.stringify(res))
}