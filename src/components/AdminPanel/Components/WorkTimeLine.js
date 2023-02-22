import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

import { addWorkTimeline, getUser } from "../../../actions/User";
import InputBox from "./InputBox/InputBox";
import TimeLine from "./SubComponents/TimeLIne/TimeLine";

const WorkTimeLine = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [startdate, setStartdate] = useState("");
    const [enddate, setEnddate] = useState("");
    const [buttonText, setButtonText] = useState("Add");

    const { message, error, loading } = useSelector((state) => state.update);
    const { user } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Adding...");
        await dispatch(addWorkTimeline(title, description, startdate, enddate));
        dispatch(getUser());
        setButtonText("Added");
        setTimeout(()=>setButtonText("Add"), 2000);
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
            <h2>Manage Work Timeline</h2>

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

            <div className="all-timeline-details">
                {user?.workTimeline?.map((item) => <TimeLine key={item._id} item={item}  i={2} />)}
            </div>
        </section>
    );
};

export default WorkTimeLine;
