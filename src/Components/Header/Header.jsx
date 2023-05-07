import './Header.scss'
import HeaderNavList from "./HeaderNavList";

function toggleMenu() {
    const menu = document.querySelector('.header-nav-list');
    const overlay = document.querySelector('.menu-overlay');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
}

const Header = ({header}) => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo-and-nav-wrapper">
                    <a href="#" className="logo">
                        <img src={require(`../../assets/${header.logo}`)} alt="logo"/>
                    </a>
                    <nav className="header-nav">
                        <div className="menu-overlay" onClick={toggleMenu}></div>
                        <svg className="burger-menu-icon" onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 448 512">
                            <path
                                fill="#150C01"
                                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
                        </svg>
                        <HeaderNavList navList = {header.navList}/>
                    </nav>
                </div>
                <button className={`btn btn-${header.button.style}`}>{header.button.name}</button>
            </div>
        </header>
    );
}

export default Header;