export interface ProductData {
    id?: number;
    name: string;
    brand?: string;
    description?: string;
    photo: string;
    price: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface ProductResponse {
    products: ProductData[];
    count: number;
}