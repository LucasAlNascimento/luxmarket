import "../Header/Header.scss"



function Header(){
    return(
        <header className="header">
            <div className="container">
                <div className="logomks">MKS</div>
                <div className="logosistemas">Sistemas</div>
            </div>
                <button className="cart">0</button>
        </header>
    )
}

export default Header;