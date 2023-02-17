import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

import contactImg from "../../assets/img/contact-img.svg";
import Title from "../SubComponents/Title";
import InputTag from "../SubComponents/InputTag";

import './Contact.css';


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

const inpVariant = {
    hidden: {
        width: "0%",
        x: "50vw",
        opacity: 0,
    },
    visible: {
        width: "100%",
        x: 0,
        opacity: 1,
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

const Contact = () => {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    };
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Send");

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
        const { firstName, lastName, email, phone, message } = formDetails;
        if ( firstName === "" || lastName === "" || email === "" || phone === "" || message === "" )
            toast.warn("Fill all detail");
        else if (!email.includes("@")) 
            toast.warn("includes @ in your email!");
        else if (phone.length < 10 || phone.length > 10)
            toast.warn("Enter only 10 digits in number!");
        else {
            setButtonText("Sending...");
            let response = await fetch(`${process.env.REACT_APP_BACKEND_LINK}/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(formDetails),
            });
            setButtonText("Send");
            let result = await response.json();
            console.log(result);
            if (result.status === 201) {
                toast.success("Feedback recorded!");
                setFormDetails(formInitialDetails);
            } else {
                toast.error("Someting went wrong! 😥");
            }
        }
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <motion.div
                            whileInView={{
                                scale: [1, 1.2, 1.2, 1, 1],
                                rotate: [0, 0, 270, 270, 0],
                                borderRadius: [ "20%", "20%", "50%", "50%", "20%" ],
                            }}
                        >
                            <img src={contactImg} alt="Contact Us" />
                        </motion.div>
                    </Col>
                    <Col size={12} md={6}>
                        <Title h2={"Get In Touch"} txtVariant={txtVariant} />

                        <form onSubmit={handleSubmit}>
                            <motion.div
                                className="row"
                                variants={contvar}
                                initial="hidden"
                                whileInView="visible"
                            >
                                <InputTag
                                    type="text"
                                    name="firstName"
                                    placeholder={"First Name"}
                                    value={formDetails.firstName}
                                    setVal={setVal}
                                    dly={0.2}
                                />
                                <InputTag
                                    type="text"
                                    name="lastName"
                                    placeholder={"Last Name"}
                                    value={formDetails.lastName}
                                    setVal={setVal}
                                    dly={0.35}
                                />
                                <InputTag
                                    type="text"
                                    name="email"
                                    placeholder={"Email Address"}
                                    value={formDetails.email}
                                    setVal={setVal}
                                    dly={0.5}
                                />
                                <InputTag
                                    type="number"
                                    name="phone"
                                    placeholder={"Phone Number"}
                                    value={formDetails.phone}
                                    setVal={setVal}
                                    dly={0.65}
                                />

                                <Col size={12} className="px-1">
                                    <motion.textarea
                                        rows="6"
                                        name="message"
                                        value={formDetails.message}
                                        placeholder="Message"
                                        onChange={setVal}
                                        variants={inpVariant}
                                        transition={{ delay: 0.8 }}
                                    />
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

export default Contact;
