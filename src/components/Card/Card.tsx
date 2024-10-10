/* eslint-disable react/react-in-jsx-scope */
import { toast } from "react-toastify";
import { Props, ProductData } from "../../interfaces/product-data";
import "./Card.scss"
import 'react-toastify/dist/ReactToastify.css';

function Card({ thumbnail, title, price }: ProductData) {


    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    const priceFormatted = formatter.format(price);

    const CustomToast = ({ title }: Props) => (
        <div style={{"textAlign":"center"}}>
            Separamos seu <br /><b>{title}</b><br />
            Obrigado pela confiança!
        </div>
    );

    function Alert() {
        toast.success(<CustomToast title={title} />, {
            position: "top-center",
            autoClose: 5000
        })
    }
    
    return (
        <div className="card">

            <div className="image__container">
                <img src={thumbnail} alt="Product Image" className="product__image"></img>
            </div>

            <div className="product__infos">
                <h2 className="product__title">{title}</h2>
                <p className="product__price">{priceFormatted}</p>
                <button className="button__add-cart" onClick={Alert}>Comprar</button>
            </div>


        </div>
    )
}

export default Card;
