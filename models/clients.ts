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
        },
        phone: {
            type: Number,
        }
    },
    {
        timestamps: true,
        versionKey: false,
        collection: "clients"
    }
)

export const ClientsModel = models["clients"] || model("clients", ClientsSchema)