"use server"

import { ClientsEmailsModel } from "@/models"
import { dbConnect } from "@/lib/db"
import { ClientsEmails } from "@/interfaces"

export const getClientsEmails = async () => {
    await dbConnect()
    const res = await ClientsEmailsModel.find({})
    return res
}

export const saveClientsEmails = async (client: ClientsEmails) => {
    await dbConnect()
    const res = await ClientsEmailsModel.create(client)
    return res
}