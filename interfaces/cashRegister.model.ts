export interface CashRegister {
    _id?: string,
    type: "buy" | "sell",
    product: string,
    quantity: number,
    unit: string,
    amount: number,
    usd_amount?: number,
    usd_blue?: number,
    createdAt?: string
}