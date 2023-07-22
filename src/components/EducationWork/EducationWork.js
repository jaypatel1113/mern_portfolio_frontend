import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import Title from "../SubComponents/Title";
import EduWorkCard from "../SubComponents/EduWorkCard";

import edu  from "../../assets/img/edu.svg";
import work from "../../assets/img/work.svg";

import './EducationWork.css';

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.8,
        },
    },
};
// const itemA = {
//     hidden: { opacity: 0, left: "-20vh" },
//     visible: { opacity: 1, left: 0, transition: {delay: 1.5} },
// };
// const itemB = {
//     hidden: { opacity: 0, right: "-20vh" },
//     visible: { opacity: 1, right: 0, transition: {delay: 1.5} },
// };

const contVariant = {
    hidden: {
        scale: 0.7,
    },
    visible: {
        scale: 1,
        transition: {
            staggerChildren: 0.5,
        },
    },
};

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

const EducationWork = ({educationTimeline, workTimeline}) => {
    const { ref: refExperience, inView: inViewExperience } = useInView({
        threshold: 0.3,
    });
    const {ref: refEducation, inView: inViewEducation} = useInView({
        threshold: 0.1,
    });
    const animationExperience1 = useAnimation();
    const animationExperience2 = useAnimation();
    const animationEducation1 = useAnimation();
    const animationEducation2 = useAnimation();

    const [initialRender, setInitialRender] = useState({experience: false, education: false});

    useEffect(() => {
        if (inViewExperience) {
            animationExperience1.start("visible");
            animationExperience2.start("visible");
        } else if (!inViewExperience && !initialRender.experience) {
            animationExperience1.start("hidden");
            animationExperience2.start("hidden");
            setInitialRender(prev => ({...prev, experience: true}));
        }
        if(inViewEducation) {
            animationEducation1.start("visible");
            animationEducation2.start("visible");
        } else if(!inViewEducation && !initialRender.education) {
            animationEducation1.start("hidden");
            animationEducation2.start("hidden");
            setInitialRender(prev => ({...prev, education: true}));
        }
        // console.log("in view = ", inViewEducation );
        // console.log("in view = ", inViewExperience );
    }, [initialRender.education, initialRender.experience, inViewExperience, inViewEducation, animationExperience1, animationExperience2, animationEducation1, animationEducation2]);

    return (
        <section className="skill eduwork" id="educations">
            <div className="container">
                <motion.div
                    className="skill-bx wow"
                    variants={contVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    style={{ position: "relative" }}
                >
                    <Title
                        h2={"Educations & Work"}
                        p={"Here are my Education details Work Experience."}
                        txtVariant={txtVariant}
                    />

                    <motion.div className="rows" variants={container}>
                        <div
                            ref={refEducation}
                            className="cols"
                        >
                            <EduWorkCard
                                titlee="My Education"
                                details={educationTimeline}
                                icon={edu}
                                animation={animationEducation1}
                                animation2={animationEducation2}
                            />
                        </div>
                        <div 
                            ref={refExperience} 
                            className="cols"
                        >
                            <EduWorkCard
                                titlee="My Experience"
                                animation={animationExperience1}
                                animation2={animationExperience2}
                                icon={work}
                                details={workTimeline}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default EducationWork;
