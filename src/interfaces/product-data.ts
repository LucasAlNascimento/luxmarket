export interface ProductData {
    id: number,
    name: string,
    brand: string,
    description: string,
    price: number
}

export interface ProductResponse {
    data: ProductData[]
}