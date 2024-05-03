import axios from "axios";

import "./Products.scss"
import { useQuery } from "react-query";
import { ProductResponse } from "../../interfaces/product-data";

function Products() {


    const { data, isLoading, isError } = useQuery("products", () => {
        return axios
        .get<ProductResponse>("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC")
        .then((response) => response.data);
    });

    console.log(data)

    if (isLoading) {
        return <div className="products">Carregando...</div>
    }
    if (isError) {
        return <div className="products">Error</div>
    }

    return (
        <div className="products">
            {data?.products.map((product) => (
               <span key={product.id}>{product.name}<br/></span>
            ))}
        </div>
    )
}

export default Products;
