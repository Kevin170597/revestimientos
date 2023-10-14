export const ResError = (message: string, status: number) => {
    return new Response(JSON.stringify({ error: message }), { status })
}

export const Res = (data: any, status: number) => {
    return new Response(JSON.stringify(data), { status })
}