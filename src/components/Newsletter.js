import { useState, useEffect } from "react";
import { Col, Nav, Row } from "react-bootstrap";
import headerImg from "../assets/img/pic.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import LangCard from "./LangCard";
import location from "../assets/img/location.svg";
import user from "../assets/img/user.svg";
import email from "../assets/img/email.svg";
import phone from "../assets/img/phone.svg";
import bday from "../assets/img/bday.svg";
import freelancer from "../assets/img/freelancer.svg";
import language from "../assets/img/language.svg";
import Detail from "./Detail";
import DarkResume from "../assets/pdfs/CV-resume-Dark Mode.pdf";
import LightResume from "../assets/pdfs/CV-resume-Light Mode.pdf";
import { motion } from "framer-motion";

const container = {
    hidden: { rotate: 90 },
    visible: {
        rotate: 0,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.5,
        },
    },
};
const itemA = {
    hidden: { scale: 0, left: "-20vh" },
    visible: { scale: 1, left: 0 },
};
const itemB = {
    hidden: { scale: 0, right: "-20vh" },
    visible: { scale: 1, right: 0 },
};

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

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 3px, rgba(0,0,0,1) 3px, rgba(0,0,0,1) 3px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 3px)`;

export const Newsletter = () => {
    const [pdf, setPdf] = useState(0);
    const [isOpen, setIsOpen] = useState("false");
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const randInt = Math.floor(Math.random() * 1000) + 1;
        setPdf(randInt % 2);
        // console.log(randInxt);
    }, [pdf]);
    return (
        <Col lg={12}>
            <div className="aboutme-bx wow">
                <Row>
                    <Col xs={12}>
                        <motion.h2
                            variants={txtVariant}
                            initial="hidden"
                            whileInView="visible"
                            // viewport={{once: true}}
                            style={{ position: "relative" }}
                        >
                            About Me
                        </motion.h2>
                        <motion.p
                            variants={txtVariant}
                            initial="hidden"
                            whileInView="visible"
                            // viewport={{once: true}}
                            style={{ position: "relative" }}
                        >
                            Here are my Personal details.
                        </motion.p>
                    </Col>
                </Row>
                <Row className="abtcont">
                    <Col
                        xs={12}
                        md={6}
                        xl={5}
                        className="piccont"
                        style={{ width: "auto" }}
                    >
                        <motion.div
                            className="imgbx"
                            initial={false}
                            animate={
                                isInView
                                    ? {
                                          WebkitMaskImage: visibleMask,
                                          maskImage: visibleMask,
                                      }
                                    : {
                                          WebkitMaskImage: hiddenMask,
                                          maskImage: hiddenMask,
                                      }
                            }
                            transition={{ duration: 1 }}
                            onViewportEnter={() => setIsInView(true)}
                            onViewportLeave={() => setIsInView(false)}
                        >
                            <img
                                src={headerImg}
                                alt="Header Img"
                                className="imgabt"
                            />
                        </motion.div>
                        <div
                            className="mtopsome"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <motion.div
                                layout
                                className={`${
                                    !isOpen ? "active lrbtn" : "lrbtn"
                                }`}
                            >
                                <button
                                    className={`${!isOpen ? "active" : ""}`}
                                >
                                    <motion.span layout="position">
                                        {isOpen ? "Download CV" : "Close"}
                                        <ArrowRightCircle size={25} />
                                    </motion.span>
                                </button>
                                {!isOpen && (
                                    <motion.span
                                        className="hiddencls"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        <Nav.Link
                                            href={`${
                                                pdf % 2 === 0
                                                    ? LightResume
                                                    : DarkResume
                                            }`}
                                            download="Jay's Resume"
                                            className="navbar-link"
                                        >
                                            <button>
                                                <span>Resume Download</span>
                                            </button>
                                        </Nav.Link>
                                        <Nav.Link
                                            href={
                                                "https://jaypatel3382.github.io/responsive-resume/"
                                            }
                                            target="_blank"
                                            className="navbar-link"
                                        >
                                            <button>
                                                <span>Resume Website</span>
                                            </button>
                                        </Nav.Link>
                                    </motion.span>
                                )}
                            </motion.div>
                        </div>
                    </Col>
                    <Col md={6} xl={7} className="abtmerow">
                        <div className="pinfo">
                            <div className="boxcont">
                                <motion.div
                                    className="box"
                                    variants={container}
                                    initial="hidden"
                                    whileInView="visible"
                                    // viewport={{once: true}}
                                >
                                    <Detail
                                        src={user}
                                        name="Full Name"
                                        value="Jay Patel"
                                        style={{ position: "relative" }}
                                        variants={itemA}
                                    />
                                    <Detail
                                        src={bday}
                                        name="Date of Birth"
                                        value="11/02/2002"
                                        style={{ position: "relative" }}
                                        variants={itemA}
                                    />
                                    <Detail
                                        src={location}
                                        name="Address"
                                        value="Bochasan, India - 388540"
                                        style={{ position: "relative" }}
                                        variants={itemA}
                                    />
                                </motion.div>
                                <motion.div
                                    className="box"
                                    variants={container}
                                    initial="hidden"
                                    whileInView="visible"
                                    // viewport={{once: true}}
                                >
                                    <Detail
                                        src={email}
                                        name="Email"
                                        value="jay64441860@gmail.com"
                                        style={{ position: "relative" }}
                                        variants={itemB}
                                    />
                                    <Detail
                                        src={phone}
                                        name="Phone"
                                        value="+91 93284 73489"
                                        style={{ position: "relative" }}
                                        variants={itemB}
                                    />
                                    <Detail
                                        src={freelancer}
                                        name="Freelance"
                                        value="Available"
                                        style={{ position: "relative" }}
                                        variants={itemB}
                                    />
                                </motion.div>
                            </div>
                        </div>
                        <div
                            className="name"
                            style={{ paddingLeft: "2rem", width: "100%" }}
                        >
                            <motion.h3
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                // viewport={{once: true}}
                                transition={{ delay: 0.8 }}
                            >
                                <img
                                    src={language}
                                    alt="Error"
                                    className="img"
                                />
                                Languages Known
                            </motion.h3>
                            <motion.div
                                className="boxCont"
                                variants={container}
                                initial="hidden"
                                whileInView="visible"
                                // viewport={{once: true}}
                            >
                                <LangCard
                                    name={"Gujarati"}
                                    perc={95}
                                    style={{ position: "relative" }}
                                    variants={itemA}
                                />
                                <LangCard
                                    name={"English"}
                                    perc={85}
                                    style={{ position: "relative" }}
                                    variants={itemA}
                                />
                                <LangCard
                                    name={"Hindi"}
                                    perc={70}
                                    style={{ position: "relative" }}
                                    variants={itemA}
                                />
                            </motion.div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};
