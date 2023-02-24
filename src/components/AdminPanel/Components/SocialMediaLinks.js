import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

import ImageBox from "./SubComponents/ImageBox/ImageBox";
import InputBox from "./SubComponents/InputBox/InputBox";
import FooterIcons from "./SubComponents/FooterIcons/FooterIcons";

import { addSocialLinks, getUser } from "../../../actions/User";

const SocialMediaLinks = () => {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [color, setColor] = useState("");
    const [icon, setIcon] = useState("");
    const [buttonText, setButtonText] = useState("Add");

    const { message, error, loading } = useSelector((state) => state.update);
    const { user } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Adding");
        await dispatch(addSocialLinks(name, link, color, icon));
        dispatch(getUser());
        setButtonText("Added");
        setTimeout(() => setButtonText("Add"), 2000);
    };

    const handleImage = (e) => {
        const file = e.target.files[0];

        const Reader = new FileReader();
        Reader.readAsDataURL(file);

        Reader.onload = () => {
            if (Reader.readyState === 2) {
                setIcon(Reader.result);
            }
        };
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
            <h2>Manage Social Media Links</h2>

            <div className="adminpanel-form">
                <div className="admin-container-inputbox">
                    <ImageBox
                        label="SVG / Icon"
                        value={icon}
                        onChange={handleImage}
                    />

                    <InputBox
                        label="Social Media Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <InputBox
                        label="Link"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                    <InputBox
                        label="Color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
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
                <div className="add-project-details">
                    {user?.socialLinks?.map((item) => <FooterIcons key={item._id} item={item} />)}
                </div>
        </section>
    );
};

export default SocialMediaLinks;