import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import navIcon4 from "../../assets/img/nav-icon4.svg";
import navIcon5 from "../../assets/img/nav-icon5.svg";
import navIcon6 from "../../assets/img/nav-icon6.svg";
import navIcon7 from "../../assets/img/nav-icon7.svg";
import navIcon8 from "../../assets/img/nav-icon8.svg";

import FooterLink from "../SubComponents/FooterLink";

import './Footer.css';

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.7,
        },
    },
};
const itemA = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 1.5,
            stiffness: 200,
        },
    },
};

const txtVariant = {
    hidden: {
        right: "-150px",
        opacity: 0,
    },
    visible: {
        right: 0,
        opacity: 1,
        transition: {
            delay: 1.8,
            type: "spring",
            bounce: 0.5,
            stiffness: 900,
        },
    },
};

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6} className="moremar">
                        <motion.span
                            className="logo"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            JAY PATEL
                        </motion.span>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <motion.div
                            className="social-icon"
                            variants={container}
                            initial="hidden"
                            whileInView="visible"
                        >
                            <FooterLink
                                icon={navIcon1}
                                link="https://www.linkedin.com/in/jaypatel1122"
                                color="#007EBB"
                                variants={itemA}
                            />
                            <FooterLink
                                icon={navIcon4}
                                link="https://api.whatsapp.com/send?phone=919328473489&text=Heyy Jay!%20got%20reference%20from%20your%20Portfolio website😁"
                                color="#01E675"
                                variants={itemA}
                            />
                            <FooterLink
                                icon={navIcon6}
                                link="https://github.com/jaypatel3382"
                                color="#fff"
                                variants={itemA}
                            />
                            <FooterLink
                                icon={navIcon3}
                                link="https://www.instagram.com/__jay.xi"
                                color="#bc2a8d"
                                variants={itemA}
                            />
                            <FooterLink
                                icon={navIcon2}
                                link="https://www.facebook.com/jay.patel.112"
                                color="#1976D2"
                                variants={itemA}
                            />
                            <FooterLink
                                icon={navIcon7}
                                link="mailto:jay64441860@gmail.com"
                                color="#00bfff"
                                variants={itemA}
                            />
                            <FooterLink
                                icon={navIcon5}
                                link="tel:+919328473489"
                                color="#99EE99"
                                variants={itemA}
                            />
                            <FooterLink
                                icon={navIcon8}
                                link="https://twitter.com/jaypatel_1510"
                                color="#03A9F4"
                                variants={itemA}
                            />
                        </motion.div>
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="visible"
                        >
                            <motion.p
                                variants={txtVariant}
                                // viewport={{once: true}}
                                style={{ position: "relative" }}
                            >
                                Copyright &#169; {new Date().getFullYear()}. All Rights Reserved
                            </motion.p>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
