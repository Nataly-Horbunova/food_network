import './Header.scss'
import {NavLink} from "react-router-dom";
import { useState } from "react";

const Header = ({header}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleBurgerClick = () => {
        setIsOpen(!isOpen);
    }

    const handleOverlayClick = () => {
        setIsOpen(false);
    }

    const handleMenuItemClick = () => {
        setIsOpen(false);
    }

    return (
        <header className="header">
            <div className="container">
                <div className="logo-and-nav-wrapper">
                    <NavLink to="/" className="logo">
                        <img src={require(`../../assets/${header.logo}`)} alt="logo" data-aos="flip-left"
                            data-aos-duration="1500" data-aos-delay="800"/>
                    </NavLink>
                    <nav className="header-nav">
                        <div className={`menu-overlay ${isOpen ? 'active' : ''}`} onClick={handleOverlayClick}></div>
                        <svg className="burger-menu-icon" onClick={handleBurgerClick} xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512">
                            <path
                                fill="#150C01"
                                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
                        </svg>
                        {/* <HeaderNavList navList={header.navList}/> */}
                        <ul className={`header-nav-list ${isOpen ? 'active' : ''}`}>
                            {
                                header.navList.map(item => {
                                    return (
                                        <li className="header-nav-item" key={item.id}>
                                            <NavLink to={`${item.route}`} className="header-nav-link" onClick={handleMenuItemClick}>{item.name}</NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>
                <button className={`btn btn-${header.button.style}`}>{header.button.name}</button>
            </div>
        </header>
    );
}

export default Header;