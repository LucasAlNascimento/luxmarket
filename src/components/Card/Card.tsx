import { ProductData } from "../../interfaces/product-data";
import "./Card.scss"

function Card({ photo, name, price }: ProductData) {

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    const priceFormatted = formatter.format(price);

    return (
        <div className="card">

            <img src={photo} alt="Product Image" className="product__image"></img>

            <div className="product__infos">
                <h2 className="product__title">{name}</h2>
                <p className="product__price">{priceFormatted}</p>
            </div>

            <button className="button__add-cart"></button>

        </div>
    )
}

export default Card;
