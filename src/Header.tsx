import React from "react"
import { Link } from "react-router-dom"
import Rotas from "./Rotas"
// import headerBtn from "./headerBtn"
const Header = () => {
    return (
        <>
            {/* <script src={headerBtn}></script> */}
            <ul className="header__ul">
                <li className="header__li">
                    <Link to="/">Home</Link>
                </li>
                <li className="header__li">
                    <Link to="/sobre">Sobre</Link>
                </li>
            </ul>
            <Rotas />
        </>
    )
}

export default Header
