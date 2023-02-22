import React from "react";
import { useDispatch } from "react-redux";
import { AiFillDelete } from "react-icons/ai";

import {  deleteKnownLanguage, deleteSkill, getUser } from "../../../../../actions/User";
import './LanguageAndSkills.css';

const LanguageAndSkills = ({ item, i }) => {
    const dispatch = useDispatch();

    const handleDelete = async (id) => {
        console.log(i, id)
        if(i===1){
            await dispatch(deleteKnownLanguage(id));
        }
        if(i===2){
            await dispatch(deleteSkill(id));
        }
        dispatch(getUser());
    };

    return (
        <div className="details">
            <div className="title">
                {item.name} 
            </div>
            <div className="button">
                <button onClick={() => handleDelete(item._id)}><AiFillDelete /></button>
            </div>
        </div>
    );
};

export default LanguageAndSkills;