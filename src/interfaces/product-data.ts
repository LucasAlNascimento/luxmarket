export interface ProductData {
    id?: string;
    title: string;
    price: number;
    thumbnail: string;
}

export interface ProductResponse {
    results: ProductData[];
}

export interface Props {
    title: string;



}