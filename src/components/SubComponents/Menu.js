import React from "react";
import { Nav } from "react-bootstrap";

const Menu = ({ i, clr, setClick, click, href, title, svg }) => {
    return (
        <li style={{ "--i": i, "--clr": clr }} onClick={() => setClick(!click)}>
            <Nav.Link href={href} className="navbar-link" data-title={title}>
                {svg}
            </Nav.Link>
        </li>
    );
};

export default Menu;
