import React from "react";
import { NavLink } from "react-router-dom";

const Menu = ({ i, clr, setClick, click, href, title, svg }) => {
    const backToTop = () => {
        setClick(!click);
        window.scrollTo({ top: 0 });
    };

    return (
        <li
            style={{ "--i": i, "--clr": clr }}
            onClick={() => backToTop()}
        >
            <NavLink to={href} className="navbar-link" data-title={title}>
                {svg}
            </NavLink>
        </li>
    );
};

export default Menu;
