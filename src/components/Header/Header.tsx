import "../Header/Header.scss"
import CartButton from "../CartButton/CartButton";



function Header(){
    return(
        <header className="header">
            <div className="container">
                <div className="logomks">LUX</div>
                <div className="logosistemas">Market</div>
            </div>
                <CartButton />
        </header>
    )
}

export default Header;
