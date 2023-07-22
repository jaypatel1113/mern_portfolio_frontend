import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { motion } from "framer-motion";

import ProjectCategory from "../SubComponents/ProjectCategory";
import ProjectCategoryName from "../SubComponents/ProjectCategoryName";
import Title from "../SubComponents/Title";

import colorSharp2 from "../../assets/img/color-sharp2.png";

import './Project.css';

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

const Projects = (props) => {
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <Title
                            h2={"Projects"}
                            p={"These are the projects that showcases my skills and experience."}
                            txtVariant={txtVariant}
                        />

                        <Tab.Container
                            id="projects-tabs"
                            defaultActiveKey="first"
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.4, delay: 1 }}
                                viewport={{once: true}}
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
                            </motion.div>
                            <Tab.Content id="slideInUp">
                                <ProjectCategory
                                    projects={props.frontendProjects}
                                    type="first"
                                />
                                <ProjectCategory
                                    projects={props.fullstackProjects}
                                    type="second"
                                />
                                <ProjectCategory
                                    projects={props.backendProjects}
                                    type="third"
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
            />
        </section>
    );
};

export default Projects;
