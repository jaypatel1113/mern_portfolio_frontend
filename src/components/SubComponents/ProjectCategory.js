import React from "react";
import { Tab } from "react-bootstrap";
import { motion } from "framer-motion";

import { ProjectCard } from "./ProjectCard";

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.5,
        },
    },
};

const itemA = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            // type: "spring",
            // duration: 1,
            // bounce: 0.3
        },
    },
};

const ProjectCategory = ({ projects, type }) => {
    return (
        <Tab.Pane eventKey={type}>
            <motion.div
                className="row"
                variants={container}
                initial="hidden"
                whileInView="visible"
            >
                {projects.map((projects, index) => {
                    return (
                        <ProjectCard
                            key={index}
                            {...projects}
                            variants={itemA}
                        />
                    );
                })}
            </motion.div>
        </Tab.Pane>
    );
};

export default ProjectCategory;
