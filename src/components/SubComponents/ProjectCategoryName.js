import React from "react";
import { Nav } from "react-bootstrap";
import { motion } from "framer-motion";

const ProjectCategoryName = ({ projectType, number }) => {
    return (
        <Nav.Item>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1 }}
            >
                <Nav.Link eventKey={number}>{projectType}</Nav.Link>
            </motion.div>
        </Nav.Item>
    );
};

export default ProjectCategoryName;
