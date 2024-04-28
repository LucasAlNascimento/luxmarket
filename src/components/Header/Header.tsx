import "../Header/Header.scss"
import CartButton from "../CartButton/CartButton";



function Header(){
    return(
        <header className="header">
            <div className="container">
                <div className="logomks">MKS</div>
                <div className="logosistemas">Sistemas</div>
            </div>
                <CartButton />
        </header>
    )
}

export default Header;