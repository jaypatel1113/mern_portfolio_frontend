import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { getUser, updateSkillImages } from "../../../actions/User";

import ImageBox from "./SubComponents/ImageBox/ImageBox";


const SkillImages = () => {
    const [skillsCubeImg, setSkillsCubeImg] = useState({});
    const [buttonText, setButtonText] = useState("Save");
    
    const { message, error, loading } = useSelector((state) => state.update);
    
    const dispatch = useDispatch();

    const handleImage = (e, val) => {
        const file = e.target.files[0];

        const Reader = new FileReader();
        Reader.readAsDataURL(file);

        Reader.onload = () => {
            if (Reader.readyState === 2) {
                if (val === 1) {
                    setSkillsCubeImg({
                        ...skillsCubeImg,
                        image1: Reader.result,
                    });
                }
                if (val === 2) {
                    setSkillsCubeImg({
                        ...skillsCubeImg,
                        image2: Reader.result,
                    });
                }
                if (val === 3) {
                    setSkillsCubeImg({
                        ...skillsCubeImg,
                        image3: Reader.result,
                    });
                }
                if (val === 4) {
                    setSkillsCubeImg({
                        ...skillsCubeImg,
                        image4: Reader.result,
                    });
                }
                if (val === 5) {
                    setSkillsCubeImg({
                        ...skillsCubeImg,
                        image5: Reader.result,
                    });
                }
                if (val === 6) {
                    setSkillsCubeImg({
                        ...skillsCubeImg,
                        image6: Reader.result,
                    });
                }
            }
        };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Saving...");
        await dispatch(updateSkillImages(skillsCubeImg));
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
            <h2>Manage Skill Cube Images</h2>

            <div className="adminpanel-form">
                <div className="admin-container-inputbox">
                    <ImageBox
                        label="Image 1"
                        value={skillsCubeImg.image1}
                        onChange={(e) => handleImage(e, 1)}
                    />
                    <ImageBox
                        label="Image 2"
                        value={skillsCubeImg.image2}
                        onChange={(e) => handleImage(e, 2)}
                    />
                    <ImageBox
                        label="Image 3"
                        value={skillsCubeImg.image3}
                        onChange={(e) => handleImage(e, 3)}
                    />
                    <ImageBox
                        label="Image 4"
                        value={skillsCubeImg.image4}
                        onChange={(e) => handleImage(e, 4)}
                    />
                    <ImageBox
                        label="Image 5"
                        value={skillsCubeImg.image5}
                        onChange={(e) => handleImage(e, 5)}
                    />
                    <ImageBox
                        label="Image 6"
                        value={skillsCubeImg.image6}
                        onChange={(e) => handleImage(e, 6)}
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

export default SkillImages;
