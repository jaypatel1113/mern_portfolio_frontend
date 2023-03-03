import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

import InputBox from "./SubComponents/InputBox/InputBox";
import TimeLine from "./SubComponents/TimeLIne/TimeLine";

import { addEducationTimeline, editEducationTimeline, getUser } from "../../../redux/actions/User";

const EducationTimeLine = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [startdate, setStartdate] = useState("");
    const [enddate, setEnddate] = useState("");
    const [editId, setEditId] = useState(null);
    const [buttonText, setButtonText] = useState("Add");

    const { message, error, loading } = useSelector((state) => state.update);
    const { user } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Adding...");
        await dispatch(addEducationTimeline(title, description, startdate, enddate));
        dispatch(getUser());
        setButtonText("Added");
        setTimeout(()=>setButtonText("Add"), 2000);
    };
    const handleUpdate = async (e, id, title, description, startdate, enddate) => {
        e.preventDefault();
        await dispatch(editEducationTimeline(id, title, description, startdate, enddate));
        dispatch(getUser());
    };

    // display messages and errors from backend in all components
    useEffect(() => {
        setEditId(null);
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
            <h2>Manage Education Timeline</h2>

            <div className="adminpanel-form">
                <div className="admin-container-inputbox">
                    <InputBox
                        label="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <InputBox
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <InputBox
                        label="Start Date"
                        value={startdate}
                        onChange={(e) => setStartdate(e.target.value)}
                        isDate={true}
                    />
                    <InputBox
                        label="End Date"
                        value={enddate}
                        onChange={(e) => setEnddate(e.target.value)}
                        isDate={true}
                    />
                </div>
                <div className="btncontiner">
                    {!editId ? (
                        <button
                            type="submit"
                            disabled={loading}
                            onClick={handleSubmit}
                        >
                            {buttonText}
                        </button>
                    ) : (
                        <button
                            type="submit"
                            disabled={loading}
                            onClick={(e) => handleUpdate(e, editId, title, description, startdate, enddate)}
                        >
                            Update
                        </button>
                    )}
                    <NavLink to="/admin">
                        <button disabled={loading}>Back</button>
                    </NavLink>
                </div>
            </div>

            <div className="all-timeline-details">
                {user?.educationTimeline?.map((item) => (
                    <TimeLine
                        key={item._id}
                        item={item}
                        i={1}
                        setTitle={setTitle}
                        setDescription={setDescription}
                        setEditId={setEditId}
                    />
                ))}
            </div>
        </section>
    );
};

export default EducationTimeLine;
