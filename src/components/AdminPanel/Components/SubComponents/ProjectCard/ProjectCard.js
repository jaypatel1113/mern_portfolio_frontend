import React from "react";
import { useDispatch } from "react-redux";

import { AiFillDelete } from "react-icons/ai";

import { deleteBackendProject, deleteFrontendProject, deleteFullstackProject, getUser } from "../../../../../actions/User";

import './ProjectCard.css';

const ProjectCard = ({ item, i }) => {
    const dispatch = useDispatch();

    const handleDelete = async (id) => {
        if(i===1){
            await dispatch(deleteFrontendProject(id));
        }
        if(i===2){
            await dispatch(deleteFullstackProject(id));
        }
        if(i===3){
            await dispatch(deleteBackendProject(id));
        }
        dispatch(getUser());
    };

    return (
        <div className="details">
            <div className="image">
                <img src={item.image.url} alt="Error" />
            </div>
            <div className="title">{item.title}</div>
                <div className="title description">{item.techstack}</div>
                <div className="button">
                    <button onClick={() => handleDelete(item._id)}><AiFillDelete /></button>
                </div>
        </div>
    );
};

export default ProjectCard;
