import React from "react";
import { NavLink } from "react-router-dom";
import { FaGraduationCap, FaLanguage } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GoProject } from "react-icons/go";
import { MdOutlineWork } from "react-icons/md";

const Links = () => {
    return (
        <div className="links">
            <NavLink to="/update/education-timeline">
                Education Timeline <FaGraduationCap />
            </NavLink>
            <NavLink to="/update/work-timeline">
                Work Timeline <MdOutlineWork />
            </NavLink>
            <NavLink to="/update/skills">
                Skills <GiSkills />
            </NavLink>
            <NavLink to="/update/known-language">
                Known Language <FaLanguage />
            </NavLink>
            <NavLink to="/update/frontend-project">
                Frontend Praject <GoProject />
            </NavLink>
            <NavLink to="/update/fullstack-project">
                Fullstack Praject <GoProject />
            </NavLink>
            <NavLink to="/update/backend-project">
                Backend Praject <GoProject />
            </NavLink>
        </div>
    );
};

export default Links;
