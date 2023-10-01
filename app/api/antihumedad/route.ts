import { getAntiHumidity } from "@/services";

export async function GET() {
    const antihumedad = await getAntiHumidity()
    return new Response(JSON.stringify(antihumedad))
}