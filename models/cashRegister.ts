import { Schema, model, models } from "mongoose"
import { CashRegister } from "@/interfaces"

const CashRegisterSchema = new Schema<CashRegister>(
    {
        type: {
            type: String,
            enum: ["buy", "sell"],
            required: true
        },
        product: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        unit: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true 
        },
        usd_amount: {
            type: Number,
            required: true
        },
        usd_blue: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
        collection: "cash-register"
    }
)

export const CashRegisterModel = models["cash-register"] || model("cash-register", CashRegisterSchema)