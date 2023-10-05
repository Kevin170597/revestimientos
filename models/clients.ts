import { Schema, model, models } from "mongoose"
import { Clients } from "@/interfaces"

const ClientsSchema = new Schema<Clients>(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
        collection: "clients"
    }
)

export const ClientsModel = models["clients"] || model("clients", ClientsSchema)