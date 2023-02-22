import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

import { addSkill, getUser } from "../../../actions/User";
import InputBox from "./InputBox/InputBox";
import LanguageAndSkills from "./SubComponents/LanguageAndSkills/LanguageAndSkills";

const Skill = () => {
    const [name, setName] = useState("");
    const [buttonText, setButtonText] = useState("Add");

    const { message, error, loading } = useSelector((state) => state.update);
    const { user } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Adding...");
        await dispatch(addSkill(name));
        dispatch(getUser());
        setButtonText("Added");
        setTimeout(() => setButtonText("Add"), 2000);
    };

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
            <h2>Manage Skills</h2>

            <div className="adminpanel-form">
                <div className="admin-container-inputbox">
                    <InputBox
                        label="Title"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="btncontiner">
                    <button
                        type="submit"
                        disabled={loading}
                        onClick={handleSubmit}
                    >
                        {buttonText}
                    </button>
                    <NavLink to="/admin">
                        <button disabled={loading}>Back</button>
                    </NavLink>
                </div>
            </div>

            <div className="all-skill-lang-details">
                {user?.skills?.map((item) => <LanguageAndSkills key={item._id} item={item} i={2} />)}
            </div>
        </section>
    );
};

export default Skill;
