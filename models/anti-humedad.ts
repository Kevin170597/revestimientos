import { Schema, model, models } from "mongoose"
import { AntiHumedad } from "@/interfaces"

const AntiHumedadSchema = new Schema<AntiHumedad>(
    {
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true
        },
        width: {
            type: Number,
            required: true
        },
        height: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        discount: {
            type: Number,
            required: true
        },
        uxm2: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
        collection: "antihumedad"
    }
)

export const AntiHumedadModel = models["antihumedad"] || model("antihumedad", AntiHumedadSchema)