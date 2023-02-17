import { Container, Row, Col, Nav } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

import headerImg from "../../Assets/img/header-img.svg";

import './Banner.css';

const containerVariant = {
    hidden: { rotate: 90 },
    visible: {
        rotate: 0,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.5,
        },
    },
};

const itemA = {
    hidden: { scale: 0},
    visible: { scale: 1},
}


const Banner = () => {
    return (
        <motion.section
            className="banner"
            id="home"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
        >
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <motion.span
                            variants={itemA}
                            className="tagline"
                        >
                            Welcome to my Portfolio
                        </motion.span>
                        <motion.h1 
                            variants={itemA}
                        >
                            <Typewriter
                                options={{
                                    strings: [
                                        "Hi, The name's Jay Patel",
                                        "Web Developer",
                                        "MERN Stack Developer",
                                        "Guys-who-loves-Tea.js",
                                        "< ButLovesTo-CodeMore />",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 70,
                                    deleteSpeed: 40,
                                    pauseFor: 2000,
                                }}
                            />
                        </motion.h1>
                        <motion.p 
                            variants={itemA}
                        >
                            I'm an Enthusiastic, Self-Motivated, Reliable, Responsible & Hard Working Person. I use a creative approach to solve the problem. I am motivated to go to the gym before work to get fit and healthy.
                            <br />
                            <br />
                            {/* When i'm not coding, I'm the proud father of a baby bulldog, 2 cats and a bunny. */}
                            {/* Programming is like sex: One mistake and you have to support it for the rest of your life. */}
                            <motion.button whileHover={{ scale: 1.05, x:15 }} whileTap={{scale: 0.7, x: -65}} >
                                <span>while ( ! ( succeed = try ( ) ) ) ;</span>
                            </motion.button>
                        </motion.p>
                        <Nav.Link href="#aboutmesec" className="navbar-link">
                            <motion.button
                                variants={itemA}
                                whileTap={{ scale: 0.9 }}
                            >
                                About Me
                                <ArrowRightCircle size={25} />
                            </motion.button>
                        </Nav.Link>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <motion.div
                            whileInView={{
                                scale: [1, 1.5, 1.5, 1, 1],
                                rotate: [0, 0, 270, 270, 0],
                                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                            }}
                        >
                            <img src={headerImg} alt="Header Img" />
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </motion.section>
    );
};

export default Banner;
