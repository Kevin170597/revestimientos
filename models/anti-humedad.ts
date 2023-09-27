import { Schema, model, models } from "mongoose"

interface AntiHumedad {
    _id: string,
    name: string,
    image: string,
    slug: string,
    size: string,
    price: number
}

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
        size: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
    },
    {
        timestamps: true,
        versionKey: false,
        collection: "antihumedad"
    }
)

export const AntiHumedadModel = models["antihumedad"] || model("antihumedad", AntiHumedadSchema)