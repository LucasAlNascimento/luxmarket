import { ProductData } from "../../interfaces/product-data";
import "./Card.scss"

function Card({ photo, name, price }: ProductData) {
    return (
        <div className="card">

            <img src={photo} alt="Product Image" className="product__image"></img>

            <div className="product__infos">
                <h2 className="product__title">{name}</h2>
                <p className="product__price">{price?.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>
            </div>

            <button className="button__add-cart"></button>

        </div>
    )
}

export default Card;
