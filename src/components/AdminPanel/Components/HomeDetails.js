import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

import ImageBox from "./SubComponents/ImageBox/ImageBox";
import InputBox from "./SubComponents/InputBox/InputBox";

import { getUser, updateHome } from "../../../redux/actions/User";

const HomeDetails = () => {
    const [home, setHome] = useState({});
    const [buttonText, setButtonText] = useState("Update");
    
    const { message, error, loading } = useSelector((state) => state.update);
    
    const dispatch = useDispatch();

    const handleAboutImage = (e, val) => {
        const file = e.target.files[0];
        
        const Reader = new FileReader();
        Reader.readAsDataURL(file);
        
        Reader.onload = () => {
            if (Reader.readyState === 2) {
                // console.log(Reader.result);
                if (val === 1) {
                    setHome({ ...home, banner_img: Reader.result });
                }
                if (val === 2) {
                    setHome({ ...home, background: Reader.result });
                }
            }
        };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Updating...");
        await dispatch(updateHome(home));
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
            <h2>Manage Home details</h2>

            <div className="adminpanel-form">
                <div className="admin-container-inputbox">
                    <ImageBox
                        label="Right Image"
                        value={home.banner_img}
                        onChange={(e) => handleAboutImage(e, 1)}
                    />
                    <ImageBox
                        label="Background Image"
                        value={home.background}
                        onChange={(e) => handleAboutImage(e, 2)}
                    />
                    <InputBox
                        label="Detail"
                        value={home.detail}
                        onChange={(e) => setHome({ ...home, detail: e.target.value })}
                    />
                    <InputBox
                        label="Quote"
                        value={home.quote}
                        onChange={(e) => setHome({ ...home, quote: e.target.value })}
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

export default HomeDetails;
