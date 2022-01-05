

import { baseURL } from "./globals"

export const getDisplayData = async () => {
    const headers = { "Content-Type": "application/json" }
    const response = await fetch(`${baseURL}/order_query`, { method: "GET", headers: headers })
    const data = await response.json()
    return data
}

export const getProducts = async () => {
    const headers = { "Content-Type": "application/json" }
    const response = await fetch(`${baseURL}/product_query`, { method: "GET", headers: headers })
    const data = await response.json()
    return data
}


