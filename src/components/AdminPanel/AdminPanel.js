import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import Title from "../SubComponents/Title";
import LabelNdInput from "./Components/SubComponents/LabelNdInput/LabelNdInput";
import Links from "./Components/SubComponents/Links";
import InputField from "./Components/SubComponents/InputField/InputField";
import SkillImages from "./Components/SubComponents/SkillImages/SkillImages";

import { logout, updateUser } from "../../actions/User";

import "./AdminPanel.css";


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
        setButtonText("Save");
        // console.log(userName, password, skillsCubeImg, about)
    };


    // display messages and errors from backend in all components
    useEffect(() => {
        console.log(":admin ", error, message, loginMessage);
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
        <section className="contact login adminpanel" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={12}>
                        <Title h2={"Admin Panel"} txtVariant={txtVariant} />

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
                                    labelRight="UserName"
                                    value={userName}
                                    onChange={(e) =>
                                        setUserName(e.target.value)
                                    }
                                    className="fullwidth"
                                />
                                <LabelNdInput
                                    labelRight="Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="fullwidth"
                                />

                                {/* about update */}
                                <InputField
                                    islabel={true}
                                    labelName={`Update About Details`}
                                    fullRow={true}
                                />
                                <LabelNdInput
                                    labelRight="FullName"
                                    value={about.fullName}
                                    onChange={(e) =>
                                        setAbout({
                                            ...about,
                                            fullName: e.target.value,
                                        })
                                    }
                                    className="fullwidth"
                                />
                                <LabelNdInput
                                    labelRight="Address"
                                    value={about.address}
                                    onChange={(e) =>
                                        setAbout({
                                            ...about,
                                            address: e.target.value,
                                        })
                                    }
                                    className="fullwidth"
                                />
                                <LabelNdInput
                                    labelRight="Date Of Birth"
                                    value={about.dob}
                                    onChange={(e) =>
                                        setAbout({
                                            ...about,
                                            dob: e.target.value,
                                        })
                                    }
                                    className="fullwidth"
                                />
                                <LabelNdInput
                                    labelRight="Email"
                                    value={about.email}
                                    onChange={(e) =>
                                        setAbout({
                                            ...about,
                                            email: e.target.value,
                                        })
                                    }
                                    className="fullwidth"
                                />
                                <LabelNdInput
                                    labelRight="Phone Number"
                                    value={about.phoneNumber}
                                    onChange={(e) =>
                                        setAbout({
                                            ...about,
                                            phoneNumber: e.target.value,
                                        })
                                    }
                                    className="fullwidth"
                                />
                                <LabelNdInput
                                    labelRight="Freelancing"
                                    value={about.freeLancing}
                                    onChange={(e) =>
                                        setAbout({
                                            ...about,
                                            freeLancing: e.target.value,
                                        })
                                    }
                                    className="fullwidth"
                                />
                                <LabelNdInput
                                    labelRight="CV website Link"
                                    value={about.cvweblink}
                                    onChange={(e) =>
                                        setAbout({
                                            ...about,
                                            cvweblink: e.target.value,
                                        })
                                    }
                                    className="fullwidth"
                                />
                                <LabelNdInput
                                    labelRight="CV Drive Link"
                                    value={about.cvfileLink}
                                    onChange={(e) =>
                                        setAbout({
                                            ...about,
                                            cvfileLink: e.target.value,
                                        })
                                    }
                                    className="fullwidth"
                                />
                                <LabelNdInput
                                    labelRight="Avtar"
                                    onChange={handleAboutImage}
                                    type="file"
                                    accept="image/*"
                                    avtar={true}
                                />

                                {/* skill update */}
                                <InputField
                                    islabel={true}
                                    labelName={`Update Skill Images`}
                                    fullRow={true}
                                />
                                <SkillImages handleImage={handleImage} i={1} />
                                <SkillImages handleImage={handleImage} i={2} />
                                <SkillImages handleImage={handleImage} i={3} />
                                <SkillImages handleImage={handleImage} i={4} />
                                <SkillImages handleImage={handleImage} i={5} />
                                <SkillImages handleImage={handleImage} i={6} />

                               <Links />

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
                                        <span>{buttonText}</span>
                                    </motion.button>
                                    <motion.button
                                        variants={btnVariant}
                                        transition={{
                                            type: "spring",
                                            bounce: 0.9,
                                            delay: 0.9,
                                            duration: 0.5,
                                        }}
                                        style={{
                                            background: "red",
                                            color: "#fff",
                                        }}
                                        onClick={logOutHandle}
                                    >
                                        <span>LogOut</span>
                                    </motion.button>
                                </Col>
                            </motion.div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AdminPanel;
