import { useState, useEffect } from "react";
import { Col, Nav, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "react-bootstrap-icons";

import location from "../../assets/img/location.svg";
import user from "../../assets/img/user.svg";
import email from "../../assets/img/email.svg";
import phone from "../../assets/img/phone.svg";
import bday from "../../assets/img/bday.svg";
import freelancer from "../../assets/img/freelancer.svg";
import language from "../../assets/img/language.svg";
import DarkResume from "../../assets/pdfs/CV-resume-Dark Mode.pdf";
import LightResume from "../../assets/pdfs/CV-resume-Light Mode.pdf";

import Detail from "../SubComponents/Detail";
import Title from "../SubComponents/Title";
import LangCard from "../SubComponents/LangCard";


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

export const Information = ({aboutDetails, languagesKnown}) => {
    const [pdf, setPdf] = useState(0);
    const [isOpen, setIsOpen] = useState("false");
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        // console.log(aboutDetails);
        const randInt = Math.floor(Math.random() * 1000) + 1;
        setPdf(randInt % 2);
        // console.log(randInxt);
    }, [pdf]);

    return (
        <Col lg={12}>
            <div className="aboutme-bx wow">
                <Row>
                    <Col xs={12}>
                        <Title
                            h2={"About Me"}
                            p={"Here are my Personal details."}
                            txtVariant={txtVariant}
                        />
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
                                src={aboutDetails.avatar.url}
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
                                className={`${ !isOpen ? "active lrbtn" : "lrbtn" }`}
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
                                                <span>CV Download</span>
                                            </button>
                                        </Nav.Link>
                                        <Nav.Link
                                            href={aboutDetails.cvweblink}
                                            target="_blank"
                                            className="navbar-link"
                                        >
                                            <button>
                                                <span>CV Website</span>
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
                                        value={aboutDetails.fullName}
                                        left={1}
                                    />
                                    <Detail
                                        src={bday}
                                        name="Date of Birth"
                                        value={aboutDetails.dob}
                                        left={1}
                                        isDate={true}
                                    />
                                    <Detail
                                        src={location}
                                        name="Address"
                                        value={aboutDetails.address}
                                        left={1}
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
                                        value={aboutDetails.email}
                                    />
                                    <Detail
                                        src={phone}
                                        name="Phone"
                                        value={aboutDetails.phoneNumber}
                                    />
                                    <Detail
                                        src={freelancer}
                                        name="Freelance"
                                        value={aboutDetails.freeLancing}
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
                                {
                                    languagesKnown?.map((language) => <LangCard key={language._id} name={language.name} />)
                                }
                            </motion.div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};
