import React from "react";
import { ProjectCard } from "./ProjectCard";
import { Row, Tab } from "react-bootstrap";

const ProjectCategory = ({projects, number}) => {
    return (
        <Tab.Pane eventKey={number}>
            <Row>
                {projects.map((projects, index) => {
                    return <ProjectCard key={index} {...projects} />;
                })}
            </Row>
        </Tab.Pane>
    );
};

export default ProjectCategory;
