import { motion } from "framer-motion";
import React from "react";
import Marquee from "react-fast-marquee";

const contVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 1.5,
        },
    },
};

const SkillList = ({ skills }) => {
    return (
        <Marquee speed={100} pauseOnHover={true} gradient={false}>
            <motion.p variants={contVariant} initial="hidden" animate="visible">
                {
                    skills?.map((skill) => <span key={skill._id}>{skill.name}</span>)
                }
            </motion.p>
        </Marquee>
    );
};

export default SkillList;
