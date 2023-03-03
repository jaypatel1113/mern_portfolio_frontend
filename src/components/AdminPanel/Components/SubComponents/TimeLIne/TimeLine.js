import React from "react";
import { useDispatch } from "react-redux";
import { format } from "date-fns";

import { AiFillDelete, AiFillEdit } from "react-icons/ai";

import { deleteEducationTimeline, deleteWorkTimeline, getUser } from "../../../../../redux/actions/User";

import "./Timeline.css";

const TimeLine = ({ item, i, setTitle, setDescription, setEditId }) => {
    const dispatch = useDispatch();

    const handleDelete = async (id) => {
        // console.log(i, id)
        if (i === 1) {
            await dispatch(deleteEducationTimeline(id));
        }
        if (i === 2) {
            await dispatch(deleteWorkTimeline(id));
        }
        dispatch(getUser());
    };
    const handleEdit = async (id) => {
        setTitle(item.title)
        setDescription(item.description)
        setEditId(id);
    };

    return (
            <div className="details">
                <div className="title">{item.title}</div>
                <div className="title description">{item.description}</div>
                <div className="title date">
                    {format(new Date(item.startdate), "dd/MM/yyyy")} - 
                    {item.enddate
                        ? format(new Date(item.enddate), "dd/MM/yyyy")
                        : "Present"
                    }
                </div>
                <div className="button">
                    <button onClick={() => handleDelete(item._id)}><AiFillDelete /></button>
                    <button onClick={() => handleEdit(item._id)}><AiFillEdit /></button>
                </div>
            </div>
    );
};

export default TimeLine;
