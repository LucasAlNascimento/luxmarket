/* eslint-disable react/react-in-jsx-scope */
import axios from "axios";
import { useQuery } from "react-query";

import { ProductResponse } from "../../interfaces/product-data";

import "./Products.scss"

import Card from "../Card/Card";
import Skeleton from "../Skeleton/Skeleton";

function Products() {

    const { data, isLoading, isError } = useQuery<ProductResponse>("products", () => {
        return axios
            .get<ProductResponse>("https://api.mercadolibre.com/sites/MLB/search?category=MLB1055", {
                headers: {
                  Authorization: `Bearer ${process.env.NEXT_PUBLIC_MERCADOLIBRE_AUTHORIZATION}`
                }
              })
            .then((response) => response.data);
    });

    if (isLoading) {
        return (
            <div className="products__skeleton">
                {[...Array(48)].map((_, index) => (
                    <Skeleton key={index} width={250} height={350} borderRadius={10} />
                ))}
            </div>
        )
    }

    if (isError) {
        return <div className="products__error">
            <h2>404</h2>
            <h3>Página Não Encontrada!</h3>
        </div>
    }

    return (
        <div className="products">
            {data?.results.map((results) => (
                <Card
                    key={results.id}
                    thumbnail={results.thumbnail}
                    title={results.title}
                    price={results.price} />
            ))}
        </div>
    )
}

export default Products;
