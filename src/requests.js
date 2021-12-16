// We need three Requests
// 1. a call to determine which products are being displayed on the map to generate a filter list as well as names for product id's on the display
// 2. a call to fetch display data to be shown on the map
// 3. wait do we really need 3?

import { baseURL } from "./globals"

export const getDisplayData = async () => {
    const headers = { "Content-Type": "application/json" }
    const response = await fetch(`${baseURL}/order_query`, { method: "GET", headers: headers })
    const data = await response.json()
    return data
}

export const getProducts = async () => {
    const headers = { "Content-Type": "application/json" }
    const response = await fetch(`${baseURL}/products`, { method: "GET", headers: headers })
    const data = await response.json()
    return data
}


