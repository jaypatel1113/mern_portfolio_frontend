import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { frontendProjects } from "./ProjectData/frontEnd";
import { backendProjects } from "./ProjectData/backEnd";
import { fullStackProjects } from "./ProjectData/fullStack";
import ProjectCategory from "./ProjectCategory";
import ProjectCategoryName from "./ProjectCategoryName";
import { motion } from "framer-motion";

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

export const Projects = () => {
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <motion.h2
                            variants={txtVariant}
                            initial="hidden"
                            whileInView="visible"
                            // viewport={{ once: true }}
                            style={{ position: "relative" }}
                        >
                            Projects
                        </motion.h2>
                        <motion.p
                            variants={txtVariant}
                            initial="hidden"
                            whileInView="visible"
                            // viewport={{ once: true }}
                            style={{ position: "relative" }}
                        >
                            These are the projects that showcases my skills and
                            experience.
                        </motion.p>
                        <Tab.Container
                            id="projects-tabs"
                            defaultActiveKey="first"
                        >
                            <Nav
                                variant="pills"
                                className="nav-pills mb-5 justify-content-center align-items-center"
                                id="pills-tab"
                            >
                                <ProjectCategoryName
                                    projectType="FrontEnd Projects"
                                    number="first"
                                    />
                                <ProjectCategoryName
                                    projectType="FullStack Projects"
                                    number="second"
                                    />
                                <ProjectCategoryName
                                    projectType="BackEnd Projects"
                                    number="third"
                                    />
                            </Nav>
                            <Tab.Content id="slideInUp">
                                <ProjectCategory
                                    projects={frontendProjects}
                                    number="first"
                                    />
                                <ProjectCategory
                                    projects={fullStackProjects}
                                    number="second"
                                />
                                <ProjectCategory
                                    projects={backendProjects}
                                    number="third"
                                />
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img
                className="background-image-right"
                src={colorSharp2}
                alt="Error"
            ></img>
        </section>
    );
};
