import { Schema, model, models } from "mongoose"
import { ClientsEmails } from "@/interfaces"

const ClientsEmailsSchema = new Schema<ClientsEmails>(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
        collection: "clients-emails"
    }
)

export const ClientsEmailsModel = models["clients-emails"] || model("clients-emails", ClientsEmailsSchema)