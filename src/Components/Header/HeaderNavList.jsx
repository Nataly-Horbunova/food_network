const HeaderNavList = ({navList}) => {
    return (
        <ul className="header-nav-list">
            {
                navList.map(item => {
                    return (
                        <li className="header-nav-item" key={item.id}>
                            <a href={item.link} className="header-nav-link">{item.name} </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default HeaderNavList;