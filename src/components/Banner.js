import { Container, Row, Col, Nav } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Typewriter from "typewriter-effect";

export const Banner = () => {
    
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""
                                    }
                                >
                                    <span className="tagline">
                                        Welcome to my Portfolio
                                    </span>
                                    <h1>
                                        <Typewriter
                                            options={{
                                                strings: [
                                                    "Hi, The name's Jay Patel",
                                                    "Web Developer",
                                                    "MERN Stack Developer",
                                                    "Guys-who-loves-Tea.js",
                                                    '< ButLovesToCodeMore />',
                                                ],
                                                autoStart: true,
                                                loop: true,
                                                delay: 70,
                                                deleteSpeed: 40,
                                                pauseFor: 2000,
                                            }}
                                        />
                                    </h1>
                                    <p>
									I'm an Enthusiastic, Self-Motivated, Reliable, Responsible & Hard Working Person. I use a creative approach to solve the problem. I am motivated to go to the gym before work to get fit and healthy. <br /><br />

                                    {/* When i'm not coding, I'm the proud father of a baby bulldog, 2 cats and a bunny. */}
                                    {/* Programming is like sex: One mistake and you have to support it for the rest of your life. */}
                                    <span>while ( ! ( succeed = try ( ) ) ) ;</span>
                                    </p>
                                    <Nav.Link
                                        href="#aboutmesec"
                                        className="navbar-link"
                                    >
                                        <button
                                            onClick={() => console.log("connect")}
                                        >
                                            About Me 
                                            <ArrowRightCircle size={25} />
                                        </button>
                                    </Nav.Link>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__zoomIn"
                                            : ""
                                    }
                                >
                                    <img src={headerImg} alt="Header Img" />
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
