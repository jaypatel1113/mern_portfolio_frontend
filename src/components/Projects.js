import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { frontendProjects } from "./ProjectData/frontEnd";
import { backendProjects } from "./ProjectData/backEnd";
import { fullStackProjects } from "./ProjectData/fullStack";
import ProjectCategory from "./ProjectCategory";
import ProjectCategoryName from "./ProjectCategoryName";

export const Projects = () => {
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""
                                    }
                                >
                                    <h2>Projects</h2>
                                    <p>
                                        These are the projects that showcases my
                                        skills and experience.
                                    </p>
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
                                        <Tab.Content
                                            id="slideInUp"
                                            className={
                                                isVisible
                                                    ? "animate__animated animate__slideInUp"
                                                    : ""
                                            }
                                        >
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
                                </div>
                            )}
                        </TrackVisibility>
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
