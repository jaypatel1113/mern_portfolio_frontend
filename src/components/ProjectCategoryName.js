import React from "react";
import { Nav } from "react-bootstrap";

const ProjectCategoryName = ({ projectType, number }) => {
    return (
        <Nav.Item>
            <Nav.Link eventKey={number}>{projectType}</Nav.Link>
        </Nav.Item>
    );
};

export default ProjectCategoryName;
