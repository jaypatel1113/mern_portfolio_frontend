import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import Title from "../SubComponents/Title";
import InputTag from "../SubComponents/InputTag";
import "./Login.css";
import loginImg from "../../assets/img/login.svg";

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

const Login = () => {
    const formInitialDetails = {
        userName: "",
        password: "",
    };
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Login");

    const setVal = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;

        setFormDetails(() => {
            return {
                ...formDetails,
                [name]: value,
            };
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        const { userName, password, } = formDetails;
        if ( userName === "" || password === "" )
            toast.warn("Fill all detail");
        else {
            setButtonText("Loggin In...");
            // console.log(formDetails);
            // let response = await fetch(`${process.env.REACT_APP_BACKEND_LINK}/contact`, {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json;charset=utf-8",
            //     },
            //     body: JSON.stringify(formDetails),
            // });
            // setButtonText("Send");
            // let result = await response.json();
            // console.log(result);
            // if (result.status === 201) {
            //     toast.success("Feedback recorded!");
            //     setFormDetails(formInitialDetails);
            // } else {
            //     toast.error("Someting went wrong! 😥");
            // }
        }
    };

    return (
        <section className="contact login" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <motion.div
                            whileInView={{ scale: [1, 1.2, 1.2, 1, 1] }}
                        >
                            <img src={loginImg} alt="Login" />
                        </motion.div>
                    </Col>
                    <Col size={12} md={6}>
                        <Title h2={"Only For Admin"} txtVariant={txtVariant} />

                        <form onSubmit={handleSubmit}>
                            <motion.div
                                className="row"
                                variants={contvar}
                                initial="hidden"
                                whileInView="visible"
                            >
                                <InputTag
                                    type="text"
                                    name="userName"
                                    placeholder={"Enter Username"}
                                    value={formDetails.userName}
                                    setVal={setVal}
                                    dly={0.2}
                                    loginPage={true}
                                    />
                                <InputTag
                                    type="password"
                                    name="password"
                                    placeholder={"Enter Password"}
                                    value={formDetails.password}
                                    setVal={setVal}
                                    dly={0.35}
                                    loginPage={true}
                                />
                                <Col size={12} className="px-1">
                                    <motion.button
                                        type="submit"
                                        variants={btnVariant}
                                        transition={{
                                            type: "spring",
                                            bounce: 0.9,
                                            delay: 1.25,
                                            duration: 0.5,
                                        }}
                                    >
                                        <span>{buttonText}</span>
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

export default Login;
