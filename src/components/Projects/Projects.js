import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import colorSharp2 from "../../assets/img/color-sharp2.png";
import { frontendProjects } from "../ProjectData/frontEnd";
import { backendProjects } from "../ProjectData/backEnd";
import { fullStackProjects } from "../ProjectData/fullStack";

import ProjectCategory from "../SubComponents/ProjectCategory";
import ProjectCategoryName from "../SubComponents/ProjectCategoryName";
import Title from "../SubComponents/Title";

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

const Projects = () => {
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <Title
                            h2={"Projects"}
                            p={
                                "These are the projects that showcases my skills and experience."
                            }
                            txtVariant={txtVariant}
                        />

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
                                    type="first"
                                />
                                <ProjectCategory
                                    projects={fullStackProjects}
                                    type="second"
                                />
                                <ProjectCategory
                                    projects={backendProjects}
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
