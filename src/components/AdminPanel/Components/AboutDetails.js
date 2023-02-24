import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

import ImageBox from "./SubComponents/ImageBox/ImageBox";
import InputBox from "./SubComponents/InputBox/InputBox";

import { getUser, updateAbout } from "../../../actions/User";

const AboutDetails = () => {
    const [about, setAbout] = useState({});
    const [buttonText, setButtonText] = useState("Update");
    
    const { message, error, loading } = useSelector((state) => state.update);
    
    const dispatch = useDispatch();

    const handleAboutImage = (e) => {
        const file = e.target.files[0];
        
        const Reader = new FileReader();
        Reader.readAsDataURL(file);
        
        Reader.onload = () => {
            if (Reader.readyState === 2) {
                // console.log(Reader.result);
                setAbout({ ...about, avatar: Reader.result });
            }
        };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Updating...");
        await dispatch(updateAbout(about));
        dispatch(getUser());
        setButtonText("Updated");
        setTimeout(()=>setButtonText("Update"), 2000);
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
            <h2>Manage About details</h2>

            <div className="adminpanel-form">
                <div className="admin-container-inputbox">
                    <ImageBox
                        label="Profile Picture"
                        value={about.avatar}
                        onChange={handleAboutImage}
                    />
                    <InputBox
                        label="Fullname"
                        value={about.fullName}
                        onChange={(e) => setAbout({ ...about, fullName: e.target.value })}
                    />
                    <InputBox
                        label="Address"
                        value={about.address}
                        onChange={(e) => setAbout({ ...about, address: e.target.value })}
                    />
                    <InputBox
                        label="Birthday"
                        value={about.dob}
                        onChange={(e) => setAbout({ ...about, dob: e.target.value })}
                        isDate={true}
                    />
                    <InputBox
                        label="Email"
                        value={about.email}
                        onChange={(e) => setAbout({ ...about, email: e.target.value })}
                    />
                    <InputBox
                        label="Phone Number"
                        value={about.phoneNumber}
                        onChange={(e) => setAbout({ ...about, phoneNumber: e.target.value })}
                    />
                    <InputBox
                        label="Freelancing"
                        value={about.freeLancing}
                        onChange={(e) => setAbout({ ...about, freeLancing: e.target.value })}
                        select={true}
                    />
                    <InputBox
                        label="CV website Link"
                        value={about.cvweblink}
                        onChange={(e) => setAbout({ ...about, cvweblink: e.target.value })}
                    />
                    <InputBox
                        label="CV Drive Link (Light)"
                        value={about.cvfileLinkLight}
                        onChange={(e) => setAbout({ ...about, cvfileLinkLight: e.target.value })}
                    />
                    <InputBox
                        label="CV Drive Link (Dark)"
                        value={about.cvfileLinkDark}
                        onChange={(e) => setAbout({ ...about, cvfileLinkDark: e.target.value })}
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

export default AboutDetails;
