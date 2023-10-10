import { getBalanceUSD } from "@/services"

export async function GET() {
    const res = await getBalanceUSD()
    return new Response(JSON.stringify(res))
}