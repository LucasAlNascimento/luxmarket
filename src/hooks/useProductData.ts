import { useQuery } from "react-query";
import axios, { AxiosPromise } from "axios";
import { ProductResponse } from "../interfaces/product-data";

const API_URL = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC'

const fetchData = async (): AxiosPromise<ProductResponse> => {
    const response = await axios.get<ProductResponse>(API_URL);
    return response;
}

function useProductData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['product-data'],
        retry: false
    })

    return {
        ...query,
        data: query.data?.data
    };
}

export default useProductData;