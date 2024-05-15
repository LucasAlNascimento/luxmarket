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

            <div className="image__container">

                <img src={photo} alt="Product Image" className="product__image"></img>

            </div>


            <div className="product__infos">
                <h2 className="product__title">{name}</h2>
                <p className="product__price">{priceFormatted}</p>
                <button className="button__add-cart">Adicionar</button>
            </div>


        </div>
    )
}

export default Card;
