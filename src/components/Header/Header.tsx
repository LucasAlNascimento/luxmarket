import "../Header/Header.scss"
import CartButton from "../CartButton/CartButton";



function Header(){
    return(
        <header className="header">
            <div className="container">
                <div className="logolux">LUX</div>
                <div className="logomarket">Market</div>
            </div>
                <CartButton />
        </header>
    )
}

export default Header;
