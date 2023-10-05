"use server"

import { ClientsModel } from "@/models"
import { dbConnect } from "@/lib/db"
import { Clients } from "@/interfaces"

export const getClients = async (): Promise<Clients[]> => {
    await dbConnect()
    const res = await ClientsModel.find({})
    return res
}

export const addClient = async (client: Clients) => {
    await dbConnect()
    const res = await ClientsModel.create(client)
    return res
}