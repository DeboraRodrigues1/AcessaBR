import React from "react";
import './header.scss';
import logoAcessaBR from '../../images/logo_acessaBR.png';
import logoEbac from '../../images/logo_ebac.png';


const Header = props => {
    return( 
        <header className="header__container">
            <div className="header__logo header__logo--state">
                <img src={logoAcessaBR} alt="Logo AcessaBR"></img>
                <span className="header__city">
                    / {props.city} - {props.state}
                </span> 
            </div>

            <div className="header__logo--ebac">
               <span className="span">
                   Apoio:
               </span>
                <img src={logoEbac} alt="Logo Ebac"></img>
            </div>
        </header>
    )
}

export default Header;