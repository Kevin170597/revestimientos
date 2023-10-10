"use server"

import { ClientsModel } from "@/models"
import { dbConnect } from "@/lib/db"
import { Clients } from "@/interfaces"

export const getClients = async (key?: string): Promise<Clients[]> => {
    await dbConnect()
    if (!key) {
        const res = await ClientsModel.find({})
        return res
    } else {
        const res = await ClientsModel.find({
            $or: [
                { "name": { $regex: key, $options: "i" } },
                { "email": { $regex: key, $options: "i" } }
            ]
        })
        return res
    }

}

export const addClient = async (client: Clients) => {
    await dbConnect()
    const res = await ClientsModel.create(client)
    return res
}

export const deleteClient = async (_id: string) => {
    await dbConnect()
    const res = await ClientsModel.deleteOne({ _id })
    return res
}