import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
    addFullstackProject,
    deleteFullstackProject,
    getUser,
} from "../../../actions/User";
import Title from "../../SubComponents/Title";
import LabelNdInput from "./SubComponents/LabelNdInput/LabelNdInput";
import { NavLink } from "react-router-dom";
import ProjectCard from "./SubComponents/ProjectCard";

const txtVariant = {
    hidden: {
        top: "-50px",
        opacity: 0,
    },
    visible: {
        top: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
        },
    },
};

const contvar = {
    hidden: {},
    visible: {},
};

const btnVariant = {
    hidden: {
        x: 500,
        opacity: 0,
        scale: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        scale: 1,
    },
};


const FullstackProject = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const { message, error, loading } = useSelector((state) => state.update);
    const { user } = useSelector((state) => state.user);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [gitLink, setGitLink] = useState("");
    const [demoLink, setDemoLink] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(addFullstackProject(title, description, image, gitLink, demoLink));
        dispatch(getUser());
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
        <section className="contact login adminpanel" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={12}>
                            <Title h2={"Fullstack Projects"} txtVariant={txtVariant} />

                        <form onSubmit={handleSubmit}>
                            <motion.div
                                className="row"
                                variants={contvar}
                                initial="hidden"
                                whileInView="visible"
                            >
                                {/* <LabelNdInput
                                    labelRight="Name"
                                    value={formDetails.name}
                                    setVal={setVal}
                                /> */}
                                <LabelNdInput
                                    labelRight="Title"
                                    value={title}
                                    onChange={(e) =>
                                        setTitle(e.target.value)
                                    }
                                    className="fullwidth"
                                />
                                <LabelNdInput
                                    labelRight="Description"
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                    className="fullwidth"
                                />
                                <LabelNdInput
                                    labelRight="Github Link"
                                    value={gitLink}
                                    onChange={(e) =>
                                        setGitLink(e.target.value)
                                    }
                                    className="fullwidth"
                                />
                                <LabelNdInput
                                    labelRight="Demo Link"
                                    value={demoLink}
                                    onChange={(e) =>
                                        setDemoLink(e.target.value)
                                    }
                                    className="fullwidth"
                                />
                                
                                <LabelNdInput
                                    labelRight="Picture"
                                    onChange={handleImage}
                                    type="file"
                                    accept="image/*"
                                    avtar={true}
                                />


                                <Col
                                    size={12}
                                    className="px-1"
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <motion.button
                                        type="submit"
                                        variants={btnVariant}
                                        transition={{
                                            type: "spring",
                                            bounce: 0.9,
                                            delay: 0.9,
                                            duration: 0.5,
                                        }}
                                        disabled={loading}
                                    >
                                        <span>Add</span>
                                    </motion.button>
                                    <NavLink to='/admin'>
                                        <motion.button
                                            type="submit"
                                            variants={btnVariant}
                                            transition={{
                                                type: "spring",
                                                bounce: 0.9,
                                                delay: 0.9,
                                                duration: 0.5,
                                            }}
                                            disabled={loading}
                                            >
                                            <span>Back</span>
                                        </motion.button>
                                    </NavLink>
                                </Col>
                            </motion.div>
                        </form>
                    </Col>
                </Row>
        <div className="containerss" style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center"}}>
                    {user?.fullstackProjects?.map((item) => <ProjectCard key={item._id} item={item}  i={2} />)}
                </div>
            </Container>
        </section>
    );
};

export default FullstackProject;