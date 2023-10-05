"use server"

import { AntiHumedadModel } from "@/models/anti-humedad"
import { dbConnect } from "@/lib/db"
import { AntiHumedad } from "@/interfaces"

export const getAntiHumidity = async () => {
    await dbConnect()
    const res = await AntiHumedadModel.find({})
    return res
}

export const getAntiHumidityBySlug = async (slug: string): Promise<AntiHumedad> => {
    await dbConnect()
    const res = await AntiHumedadModel.find({ slug })
    return res[0]
}

export const updateAntihumidity = async (slug: string, data: any) => {
    await dbConnect()
    const res = await AntiHumedadModel.updateOne({ slug }, data)
    return res
}