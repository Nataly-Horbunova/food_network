import HeaderNavItem from './HeaderNavItem';
import navMenu from './../../data/constants';

const HeaderNavList = () => {
    return (
        <ul className="header-nav-list">
            {
                navMenu.map(text => {
                    return <HeaderNavItem text={text} key={crypto.randomUUID()}/>
                })
            }
        </ul>
    )
}

export default HeaderNavList;