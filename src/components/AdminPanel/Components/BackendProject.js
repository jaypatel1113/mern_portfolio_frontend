import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

import { addBackendProject, getUser } from "../../../actions/User";
import ImageBox from "./ImageBox/ImageBox";
import InputBox from "./InputBox/InputBox";
import ProjectCard from "./SubComponents/ProjectCard/ProjectCard";

const BackendProject = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [gitLink, setGitLink] = useState("");
    const [demoLink, setDemoLink] = useState("");
    const [buttonText, setButtonText] = useState("Add");

    const { message, error, loading } = useSelector((state) => state.update);
    const { user } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Adding");
        await dispatch(addBackendProject(title, description, image, gitLink, demoLink));
        dispatch(getUser());
        setButtonText("Added");
        setTimeout(() => setButtonText("Add"), 2000);
    };

    const handleImage = (e) => {
        const file = e.target.files[0];

        const Reader = new FileReader();
        Reader.readAsDataURL(file);

        Reader.onload = () => {
            if (Reader.readyState === 2) {
                // console.log(Reader.result);
                setImage(Reader.result);
            }
        };
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
            <h2>Manage Backend Projects</h2>

            <div className="adminpanel-form">
                <div className="admin-container-inputbox">
                    <ImageBox
                        label="Picture"
                        value={image}
                        onChange={handleImage}
                    />

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
                        label="Github Link"
                        value={gitLink}
                        onChange={(e) => setGitLink(e.target.value)}
                    />
                    <InputBox
                        label="Demo Link"
                        value={demoLink}
                        onChange={(e) => setDemoLink(e.target.value)}
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
                <div className="add-project-details">
                    {user?.backendProjects?.map((item) => <ProjectCard key={item._id} item={item}  i={3} />)}
                </div>
        </section>
    );
};

export default BackendProject;