import axios from "axios";
import { useQuery } from "react-query";

import { ProductResponse } from "../../interfaces/product-data";

import "./Products.scss"

import Card from "../Card/Card";
import Skeleton from "../Skeleton/Skeleton";


function Products() {

    const { data, isLoading, isError } = useQuery<ProductResponse>("products", () => {
        return axios
            .get<ProductResponse>("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC")
            .then((response) => response.data);
    });

    if (isLoading) {
        return (
            <div className="products__skeleton">
                {[...Array(8)].map((index) => (
                    <Skeleton key={index} width={250} height={350} borderRadius={10}/>
                ))}
            </div>
        )
    }

    if (isError) {
        return <div className="products">Error</div>
    }

    return (
        <div className="products">
            {data?.products.map((product) => (
                <Card key={product.id} photo={product.photo} name={product.name} price={product.price} />
            ))}
        </div>
    )
}

export default Products;
