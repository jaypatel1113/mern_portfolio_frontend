import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";

import { deleteFeedback, getUser } from "../../../../../redux/actions/User";

const FeedbackDetail = ({item}) => {
    const dispatch = useDispatch();

    const handleDelete = async (id) => {
        // console.log(i, id)
        await dispatch(deleteFeedback(id));
        dispatch(getUser());
    };

    return (
        <div className="details">
            <div className="title">Name: {item.name}</div>
            <div className="title description">Email: {item.email}</div>
            <div className="title description">Message: {item.message}</div>
            <div className="button">
                <button onClick={() => handleDelete(item._id)}>
                    <AiFillDelete />
                </button>
            </div>
        </div>
    );
};

export default FeedbackDetail;
