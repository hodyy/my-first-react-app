import "../../styles/Menu.css";
import {NavLink, Outlet} from "react-router-dom";

const Menu = () => {

    return (
    <>
        <div className="menu">
            <NavLink id="nav-link-popular" className="menu-button" to = "/popular">Populární</NavLink>
            <NavLink id="nav-link-favorite"className="menu-button" to = "/favorites">Oblíbené</NavLink>
            <NavLink id="nav-link-search" className="menu-button" to = "/searcher">Vyhledej</NavLink>
            <NavLink id="nav-link-settings" className="menu-button" to = "/settings">Nastavení</NavLink>
        </div>
        <hr></hr>
            <Outlet></Outlet>
    </>
    )
};

export default Menu;