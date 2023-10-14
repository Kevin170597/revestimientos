
"use server"

import { CashRegisterModel } from "@/models"
import { CashRegister } from "@/interfaces"
import { dbConnect, getDollarBlue } from "@/lib"

export const getRegister = async () => {

}

export const getAllRegister = async (): Promise<CashRegister[]> => {
    await dbConnect()
    const res = await CashRegisterModel.find({})
    return res
}

export const getBalance = async (): Promise<{ buy: number, sell: number, balance: number }> => {
    const register = await getAllRegister()
    let buy: number = 0
    let sell: number = 0
    register.map((e) => e.type === "buy" ? buy = buy + e.amount : sell = sell + e.amount)
    return { buy, sell, balance: (sell - buy) }
}

export const getBalanceUSD = async (): Promise<{ buy: number, sell: number, balance: number }> => {
    const register = await getAllRegister()
    let buy: number = 0
    let sell: number = 0
    register.map((e) => {
        if(e.usd_amount && e.usd_blue)
        e.type === "buy" ? buy = buy + e.usd_amount : sell = sell + e.usd_amount
    })
    return { buy: Number(buy.toFixed(2)), sell: Number(sell.toFixed(2)), balance: Number((sell - buy).toFixed(2)) }
}

export const addRegister = async (register: CashRegister) => {
    console.log(28, " here")
    await dbConnect()
    const blue = await getDollarBlue()
    register.usd_blue = blue
    register.usd_amount = Number((register.amount / blue).toFixed(2))
    const res = await CashRegisterModel.create(register)
    return res
}

export const updateRegister = async () => {

}

export const deleteRegister = async () => {

}