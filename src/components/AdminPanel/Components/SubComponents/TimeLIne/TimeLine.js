import React from "react";
import { useDispatch } from "react-redux";
import { format } from "date-fns";

import "./Timeline.css";

import { deleteEducationTimeline, deleteWorkTimeline, getUser } from "../../../../../actions/User";
import { AiFillDelete } from "react-icons/ai";

const TimeLine = ({ item, i }) => {
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
                    <button onClick={() => handleDelete(item._id)}>
                        <AiFillDelete />
                    </button>
                </div>
            </div>
    );
};

export default TimeLine;
