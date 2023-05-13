import {NavLink} from "react-router-dom";

const HeaderNavList = ({navList}) => {
    return (
        <ul className="header-nav-list">
            {
                navList.map(item => {
                    return (
                        <li className="header-nav-item" key={item.id}>
                            <NavLink to={`${item.route}`} className="header-nav-link">{item.name}</NavLink>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default HeaderNavList;