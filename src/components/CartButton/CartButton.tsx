import "./CartButton.scss"
import { TiShoppingCart } from "react-icons/ti";

function CartButton() {
    return (
        <button type="button" className="cart">
            <TiShoppingCart />
            <span className="cart-quantity">0</span>
        </button>
    )
}

export default CartButton;