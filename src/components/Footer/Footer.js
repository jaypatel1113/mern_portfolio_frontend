import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

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

const Footer = ({user}) => {
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
                            {user?.socialLinks?.map((item) => (
                                <FooterLink
                                    key={item._id}
                                    icon={item.icon.url}
                                    link={item.link}
                                    color={item.color}
                                    variants={itemA}
                                />
                            ))}
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
                                Copyright &#169; {new Date().getFullYear()}. All
                                Rights Reserved
                            </motion.p>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
