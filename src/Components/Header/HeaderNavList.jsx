import HeaderNavItem from './HeaderNavItem';
import {navMenu} from '../../data/constants';

const HeaderNavList = () => {
    return (
        <ul className="header-nav-list">
            {
                navMenu.map(item => {
                    return <HeaderNavItem text={item.name} key={item.id}/>
                })
            }
        </ul>
    )
}

export default HeaderNavList;