import React from "react";
import { useState } from "react";
import {
    Award,
    EnvelopeHeart,
    HouseDoor,
    Mortarboard,
    Person,
    Plus,
    Puzzle,
} from "react-bootstrap-icons";

import Menu from "../../SubComponents/Menu";

import './MenuLinks.css';

const MenuLinks = () => {
    const [click, setClick] = useState("false");

    return (
        <div className="menuLinks">
            <ul className={`menus ${!click ? "active" : ""}`}>
                <div className="togglers" onClick={() => setClick(!click)}>
                    <Plus />
                </div>
                <Menu
                    i={0}
                    clr={"#ff2972"}
                    setClick={setClick}
                    click={click}
                    href={"/"}
                    title={"Home"}
                    svg={<HouseDoor />}
                />
                <Menu
                    i={1}
                    clr={"#FF00FF"}
                    setClick={setClick}
                    click={click}
                    href={"/about-me"}
                    title={"About Me"}
                    svg={<Person />}
                />
                <Menu
                    i={2}
                    clr={"#04fc43"}
                    setClick={setClick}
                    click={click}
                    href={"/education-work"}
                    title={"Education & Work"}
                    svg={<Mortarboard />}
                />
                <Menu
                    i={3}
                    clr={"#ffc0cb"}
                    setClick={setClick}
                    click={click}
                    href={"/skills"}
                    title={"Skills"}
                    svg={<Award />}
                />
                <Menu
                    i={4}
                    clr={"#00b0fe"}
                    setClick={setClick}
                    click={click}
                    href={"/projects"}
                    title={"Projects"}
                    svg={<Puzzle />}
                />
                <Menu
                    i={5}
                    clr={"#fea600"}
                    setClick={setClick}
                    click={click}
                    href={"/contact"}
                    title={"Contact"}
                    svg={<EnvelopeHeart />}
                />
            </ul>
        </div>
    );
};

export default MenuLinks;
