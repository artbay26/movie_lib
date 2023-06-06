import './HeaderBottom.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import GenresHeader from './GenresHeader/genres'

const HeaderBottom = () => {
    return ( 
        <div className="header__bottomWrapper">
            <div className="header__bottom">
                <nav className="header__genres genres">
                    <GenresHeader/>
                </nav>
                <div className="header__search">
                    <form className="header__formH formH">
                        <div className="formH__inputContainer">
                            <button type="submit" className="formH__btn">
                                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                            </button>
                                <input type="text" className="formH__input"/>
                            <button type="reset" className="formH__inputReset">
                                <FontAwesomeIcon icon={faCircleXmark}/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>               
    );
}

export default HeaderBottom;