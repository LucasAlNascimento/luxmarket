import useProductData from "../../hooks/useProductData";
import "./Products.scss"

function Products() {
    const { data, isLoading, isError } = useProductData();

    return (
        <div className="products">
            {
                !isLoading && <>
                {data?.data.map(product => (
                    <div key={product.id}>
                        {product.name},
                        
                    </div>
                ))}              
                </>
            }
            {isLoading && <p>carregando</p>}
            {isError && <p>error</p>}
        </div>
    )
}

export default Products;