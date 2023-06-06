import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClapperboard} from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";


const Header = () => {
    return ( 
        <header className="header">
            <div className="header__container _container">
                <div className="header__top">
                    <NavLink to="/" className="header__logo">
                        <span><FontAwesomeIcon icon={faClapperboard}/></span> bay
                    </NavLink>
                    <nav className="header__menu menu">
                        <div className="menu__body">
                            <ul className="menu__list">
                                <li className="menu__item">
                                    <NavLink to="/top20" className="menu__link">TOP-20</NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink to="/newCatalog" className="menu__link">NEW</NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink to="/favorit" className="menu__link">MY FAVORITE</NavLink>                               
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="header__actions actions">
                        <ul className="actions_list">                            
                            <li className="actions__item">
                                <a className="actions__link" href="#">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className="faIcon"/>  
                                    <span className="faText"> Search</span>
                                </a>
                            </li>                                             
                            <li className="actions__item">
                                <a className="actions__link" href="#">
                                    <FontAwesomeIcon icon={faUser} className="faIcon"/>  
                                    <span className="faText"> Sign In</span>
                                </a>
                            </li>                                                          
                        </ul>
                    </div>
                    <button className="header__btnMenu" type="button">
                        <FontAwesomeIcon icon={faBars} className="faIcon"/>
                    </button> 
                </div>
                  
            </div>
        </header>   
    );
}

export default Header;