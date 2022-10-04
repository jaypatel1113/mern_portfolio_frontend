import { useState, useEffect } from "react";
import { Col, Nav, Row } from "react-bootstrap";
import headerImg from "../assets/img/pic.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
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

export const Newsletter = () => {
    const [pdf, setPdf] = useState(0);
    
    useEffect(() => {
        const randInt = Math.floor(Math.random() * 1000 ) + 1;
        setPdf(randInt % 2);
        console.log(randInt);
    }, [pdf])
    return (
        <Col lg={12}>
            <div className="newsletter-bx wow slideInUp">
                <Row>
                    <Col xs={12}>
                        <div className="">
                            <h2>About Me</h2>
                            <p>Here are my Personal details.</p>
                        </div>
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
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__zoomIn"
                                            : ""
                                    }
                                >
                                    <div className="imgbx">
                                        <img src={headerImg} alt="Header Img" className="imgabt" />
                                    </div>
                                </div>
                            )}
                        </TrackVisibility>
                        <Nav.Link href={`${pdf % 2 === 0 ? LightResume : DarkResume}`} download="Jay's Resume" className="navbar-link">
                            <button onClick={() => console.log("connect")}>
                                <span>
                                    Download CV
                                    <ArrowRightCircle size={25} />
                                </span>
                            </button>
                        </Nav.Link>
                    </Col>
                    <Col md={6} xl={7} className="abtmerow">
                        <div className="pinfo">
                            <div className="boxcont">
                                <div className="box">
                                    <Detail src={user} name="Full Name" value="Jay Patel" />
                                    <Detail src={bday} name="Date of Birth" value="11/02/2002" />
                                    <Detail src={location} name="Address" value="Bochasan, India - 388540" />
                                </div>
                                <div className="box">
                                    <Detail src={email} name="Email" value="jay64441860@gmail.com" />
                                    <Detail src={phone} name="Phone" value="+91 93284 73489" />
                                    <Detail src={freelancer} name="Freelance" value="Available" />
                                </div>
                            </div>
                        </div>
                        <div className="name" style={{ paddingLeft: "2rem", width: "100%" }}>
                            <h3><img src={language} alt="Error" className="img" />Languages Known</h3>
                            <div className="boxCont" >
                                <LangCard name={"Gujarati"} perc={"95"} />
                                <LangCard name={"English"} perc={"85"} />
                                <LangCard name={"Hindi"} perc={"70"} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};
