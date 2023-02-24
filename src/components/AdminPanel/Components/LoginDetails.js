import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { getUser, updateLoginDetails } from "../../../actions/User";

import InputBox from "./SubComponents/InputBox/InputBox";



const LoginDetails = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [buttonText, setButtonText] = useState("Save");
    
    const { message, error, loading } = useSelector((state) => state.update);
    
    const dispatch = useDispatch();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Saving...");
        await dispatch(updateLoginDetails(userName, password));
        dispatch(getUser());
        setButtonText("Saved");
        setTimeout(()=>setButtonText("Save"), 2000);
    };

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
            <h2>Manage Login details</h2>

            <div className="adminpanel-form">
                {/* <LabelNdInput
                    labelRight="Name"
                    value={formDetails.name}
                    setVal={setVal}
                /> */}
                <div className="admin-container-inputbox">
                    <InputBox
                        label="UserName"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <InputBox
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
        </section>
    );
};

export default LoginDetails;
