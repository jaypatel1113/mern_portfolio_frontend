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
                {projects?.map((project) => {
                    return (
                        <ProjectCard
                            key={project._id}
                            project={project}
                            variants={itemA}
                        />
                    );
                })}
            </motion.div>
        </Tab.Pane>
    );
};

export default ProjectCategory;
