import React from "react";
import { Nav } from "react-bootstrap";

const ProjectCategoryName = ({ projectType, number }) => {
    return (
        <Nav.Item>
            <div>
                <Nav.Link eventKey={number}>{projectType}</Nav.Link>
            </div>
        </Nav.Item>
    );
};

export default ProjectCategoryName;
