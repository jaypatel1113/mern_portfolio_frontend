import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

import contactImg from "../../assets/img/contact-img.svg";
import Title from "../SubComponents/Title";
import InputTag from "../SubComponents/InputTag";

import { contactus } from "../../actions/User";

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
        fullName: "",
        email: "",
        message: "",
    };
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Send");

    const dispatch = useDispatch();
    const { message:updateMessage, error, loading } = useSelector((state) => state.update);

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
        const { fullName, email, message } = formDetails;
        if ( fullName === "" || email === "" || message === "" )
            toast.warn("Fill all detail");
        else if (!email.includes("@")) 
            toast.warn("includes @ in your email!");
        else {
            setButtonText("Sending...");
            dispatch(contactus(fullName, email, message))
            setButtonText("Send");
        }
    };

    
    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: "CLEAR_ERROR" });
        }
        if (updateMessage) {
            toast.success(updateMessage);
            dispatch({ type: "CLEAR_MESSAGE" });
        }
    }, [error, updateMessage, dispatch]);

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
                                    name="fullName"
                                    placeholder={"First Name"}
                                    value={formDetails.fullName}
                                    setVal={setVal}
                                    dly={0.2}
                                />
                                <InputTag
                                    type="text"
                                    name="email"
                                    placeholder={"Email Address"}
                                    value={formDetails.email}
                                    setVal={setVal}
                                    dly={0.35}
                                />

                                <Col size={12} className="px-1">
                                    <motion.textarea
                                        rows="6"
                                        name="message"
                                        value={formDetails.message}
                                        placeholder="Message"
                                        onChange={setVal}
                                        variants={inpVariant}
                                        transition={{ delay: 0.5 }}
                                    />
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
