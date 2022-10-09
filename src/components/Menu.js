import React from "react";
import { useState } from "react";
import { Nav } from "react-bootstrap";
import {
    Award,
    EnvelopeHeart,
    HouseDoor,
    Mortarboard,
    Person,
    Plus,
    Puzzle,
} from "react-bootstrap-icons";

const Menu = () => {
    const [click, setClick] = useState("false");

    return (
        <div className="menuList">
            <ul className={`menus ${!click ? "active" : ""}`}>
                <div className="togglers" onClick={() => setClick(!click)}>
                    <Plus />
                </div>
                <li style={{ "--i": 0, "--clr": "#ff2972" }} onClick={() => setClick(!click)}>
                    <Nav.Link href="#home" className="navbar-link" data-title="Home">
                        <HouseDoor />
                    </Nav.Link>
                </li>
                <li style={{ "--i": 1, "--clr": "#FF00FF" }} onClick={() => setClick(!click)}>
                    <Nav.Link href="#aboutmesec" className="navbar-link" data-title="About Me">
                        <Person />
                    </Nav.Link>
                </li>
                <li style={{ "--i": 2, "--clr": "#04fc43" }} onClick={() => setClick(!click)}>
                    <Nav.Link href="#educations" className="navbar-link" data-title="Education & Work">
                        <Mortarboard />
                    </Nav.Link>
                </li>
                <li style={{ "--i": 3, "--clr": "#ffc0cb" }} onClick={() => setClick(!click)}>
                    <Nav.Link href="#skills" className="navbar-link" data-title="Skills">
                        <Award />
                    </Nav.Link>
                </li>
                <li style={{ "--i": 4, "--clr": "#00b0fe" }} onClick={() => setClick(!click)}>
                    <Nav.Link href="#projects" className="navbar-link" data-title="Projects">
                        <Puzzle />
                    </Nav.Link>
                </li>
                <li style={{ "--i": 5, "--clr": "#fea600" }} onClick={() => setClick(!click)}>
                    <Nav.Link href="#connect" className="navbar-link" data-title="Contact">
                        <EnvelopeHeart />
                    </Nav.Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
