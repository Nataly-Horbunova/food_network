import './Menu.scss';
import MenuCard from "./MenuCard";
import {useState} from "react";

function Menu({menu}) {
    const [visible, setVisible] = useState(6);

    function showMore() {
        setVisible(prev => prev +3);
    }


    return (
        <section className="section-menu" id={menu.id}>
            <div className="container">
                <h2 className="section-tittle">{menu.tittle}</h2>
                <h3 className="section-heading ">{menu.heading}</h3>
                <p className="section-menu-text">{menu.description}</p>
                <ul className="section-menu-card-list">
                    {
                        menu.cards.slice(0, visible).map(card => {
                            return (
                                <MenuCard card={card} key={card.id}/>
                            );
                        })
                    }
                </ul>

                <button className={`btn btn-${menu.button.style}`} onClick = {showMore} >{menu.button.name} </button>
            </div>
        </section>
    )
}

export default Menu;