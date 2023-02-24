import React from "react";
import { useDispatch } from "react-redux";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

import {  deleteKnownLanguage, deleteSkill, getUser } from "../../../../../actions/User";
import './LanguageAndSkills.css';

const LanguageAndSkills = ({ item, i, setName, setEditId }) => {
    const dispatch = useDispatch();

    const handleDelete = async (id) => {
        if(i===1){
            await dispatch(deleteKnownLanguage(id));
        }
        if(i===2){
            await dispatch(deleteSkill(id));
        }
        dispatch(getUser());
    };
    const handleEdit = async (id) => {
        setName(item.name);
        setEditId(id);
    };

    return (
        <div className="details">
            <div className="title">
                {item.name} 
            </div>
            <div className="button">
                <button onClick={() => handleDelete(item._id)}><AiFillDelete /></button>
                <button onClick={() => handleEdit(item._id)}><AiFillEdit /></button>
            </div>
        </div>
    );
};

export default LanguageAndSkills;