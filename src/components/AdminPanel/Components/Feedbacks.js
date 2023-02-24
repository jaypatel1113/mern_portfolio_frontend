import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

import FeedbackDetail from "./SubComponents/FeedbackDetail/FeedbackDetail";

const Feedbacks = () => {

    const { message, error, loading } = useSelector((state) => state.update);
    const { user } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    // display messages and errors from backend in all components
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
                <h2>Manage Feedbacks</h2>

                          
                <div className="all-timeline-details">
                    {user?.feedbacks?.map((item) => <FeedbackDetail key={item._id} item={item} />)}
                </div>
                <div className="btncontiner feedbackback">
                    <NavLink to='/admin'>
                        <button disabled={loading}>
                            Back
                        </button>
                    </NavLink>
                </div>
        </section>
    );
};

export default Feedbacks;
