import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    {/* <MailchimpForm /> */}
                    <Col size={12} sm={6} className="moremar">
                        <span className="logo">JAY PATEL</span>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/jaypatel1122">
                                <img src={navIcon1} alt="Error" />
                            </a>
                            <a href="https://www.facebook.com/jay.patel.112">
                                <img src={navIcon2} alt="Error" />
                            </a>
                            <a href="https://www.instagram.com/__jay.xi/">
                                <img src={navIcon3} alt="Error" />
                            </a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
