"use server"

import { AntiHumedadModel } from "@/models/anti-humedad"
import { dbConnect } from "@/lib/db"

interface AntiHumedad {
    _id: string,
    name: string,
    image: string,
    slug: string,
    size: string,
    price: number
}

export const getAntiHumidity = async () => {
    try {
        await dbConnect()
        const res = await AntiHumedadModel.find({})
        return res
    } catch (error) {
        console.log(error)
    }
}

export const getAntiHumidityBySlug = async (slug: string): Promise<AntiHumedad> => {
    await dbConnect()
    const res = await AntiHumedadModel.find({ slug })
    return res[0]
}

export const updateAntihumidity = async (slug: string, data: any) => {
    await dbConnect()
    const res = await AntiHumedadModel.updateOne({ slug }, data)
    console.log(res)
    return res
}