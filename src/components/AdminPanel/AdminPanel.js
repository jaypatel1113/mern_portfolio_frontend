import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { FaGraduationCap, FaLanguage, FaUserEdit, FaProjectDiagram, FaImages, } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GoProject } from "react-icons/go";
import { MdOutlineWork } from "react-icons/md";
import { HiOutlineLogin } from "react-icons/hi";
import { FiLink } from "react-icons/fi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { RiFeedbackFill } from "react-icons/ri";

import { logout } from "../../actions/User";

import "./AdminPanel.css";

const AdminPanel = () => {
    const { message, error } = useSelector((state) => state.login);

    const dispatch = useDispatch();

    const logOutHandle = () => {
        dispatch(logout());
    };
    
    // display messages and errors from backend in all components
    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: "CLEAR_ERROR" });
        }
        if (message) {
            toast.success(message);
            dispatch({ type: "CLEAR_MESSAGE" });
        }
    }, [error, message, dispatch]);

    return (
        <section className="contact login adminpanelcontainer" id="connect">
            <div className="links">
                <NavLink to="/update/login-details">
                    Login Details <HiOutlineLogin />
                </NavLink>
                <NavLink to="/update/home-details">
                    Home Details <HiOutlineLogin />
                </NavLink>
                <NavLink to="/update/About-details">
                    About Details <FaUserEdit />
                </NavLink>
                <NavLink to="/update/skill-images">
                    Skill Images <FaImages />
                </NavLink>
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
                    Frontend Project <GoProject />
                </NavLink>
                <NavLink to="/update/fullstack-project">
                    Fullstack Project <FaProjectDiagram />
                </NavLink>
                <NavLink to="/update/backend-project">
                    Backend Project <AiOutlineFundProjectionScreen />
                </NavLink>
                <NavLink to="/update/social-link">
                    Social Media link <FiLink />
                </NavLink>
                <NavLink to="/view/feedbacks">
                    View Feedbacks <RiFeedbackFill />
                </NavLink>
            </div>
            <div className="btncontiner">
                <button onClick={logOutHandle} className="logout">
                    Logout
                </button>
            </div>
        </section>
    );
};

export default AdminPanel;
