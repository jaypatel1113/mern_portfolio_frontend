import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";


import { logout, updateUser } from "../../actions/User";

import "./AdminPanel.css";
import InputBox from "./Components/SubComponents/InputBox/InputBox";
import ImageBox from "./Components/SubComponents/ImageBox/ImageBox";
import Links from "./Components/SubComponents/Links";


const AdminPanel = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [skillsCubeImg, setSkillsCubeImg] = useState({});
    const [about, setAbout] = useState({});
    const [buttonText, setButtonText] = useState("Save");
    
    const { message: loginMessage } = useSelector((state) => state.login);
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

    const logOutHandle = () => {
        dispatch(logout());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Saving...");
        await dispatch(updateUser(userName, password, skillsCubeImg, about));
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
        if (loginMessage) {
            toast.success(loginMessage);
            dispatch({ type: "CLEAR_MESSAGE" });
        }
    }, [error, message, loginMessage, dispatch]);

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
                    <button
                        disabled={loading}
                        onClick={logOutHandle}
                        className="logout"
                    >
                        Logout
                    </button>
                </div>
            </div>

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
                        label="CV Drive Link"
                        value={about.cvfileLink}
                        onChange={(e) => setAbout({ ...about, cvfileLink: e.target.value })}
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
                </div>
            </div>

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
                </div>
            </div>

            <Links />

           
        </section>
    );
};

export default AdminPanel;
