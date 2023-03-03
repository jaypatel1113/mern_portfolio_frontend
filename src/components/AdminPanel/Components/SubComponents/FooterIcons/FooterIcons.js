import React from "react";
import { useDispatch } from "react-redux";

import { AiFillDelete } from "react-icons/ai";

import { deleteSocialLinks, getUser } from "../../../../../redux/actions/User";

const FooterIcons = ({ item, styles }) => {
    const dispatch = useDispatch();

    const handleDelete = async (id) => {
        await dispatch(deleteSocialLinks(id));
        dispatch(getUser());
    };

    return (
        <div className="details">
            <div className="image" style={{ width: "5rem" }}>
                <img src={item.icon.url} alt="Error" />
            </div>
            <div className="title">{item.name}</div>
            <div className="title description">{item.link}</div>
            <div className="button">
                <button onClick={() => handleDelete(item._id)}>
                    <AiFillDelete />
                </button>
            </div>
        </div>
    );
};

export default FooterIcons;
