import { getBalance } from "@/services"

export async function GET() {
    const res = await getBalance()
    return new Response(JSON.stringify(res))
}