
"use server"

import { CashRegisterModel } from "@/models"
import { dbConnect } from "@/lib/db"
import { CashRegister } from "@/interfaces"

export const getRegister = async () => {

}

export const getAllRegister = async () => {
    await dbConnect()
    const res = await CashRegisterModel.find({})
    return res
}

const fetchDollar = async () => {
    const req = await fetch("https://api.bluelytics.com.ar/v2/latest")
    const res = await req.json()
    console.log(res.blue.value_avg)
    return res.blue.value_avg
}

export const addRegister = async (register: CashRegister) => {
    await dbConnect()
    const blue = await fetchDollar()
    register.usd_blue = blue
    register.usd_amount = Number((register.amount / blue).toFixed(2))
    const res = await CashRegisterModel.create(register)
    return res
}

export const updateRegister = async () => {

}

export const deleteRegister = async () => {

}