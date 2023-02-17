import React from "react";
import { educationData } from "../ProjectData/educationData";
import { experienceData } from "../ProjectData/experienceData";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import Title from "../SubComponents/Title";
import EduWorkCard from "../SubComponents/EduWorkCard";
import './EducationWork.css'

const container = {
    hidden: { scale: 0 },
    visible: {
        scale: 1,
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

const EducationWork = () => {
    const { ref, inView } = useInView({
        threshold: 0.3,
    });
    // const {ref2, inView2} = useInView({
    //     threshold: 0.5
    // });
    const animation = useAnimation();
    const animation2 = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start("visible");
            animation2.start("visible");
        } else if (!inView) {
            animation.start("hidden");
            animation2.start("hidden");
        }
        // if(inView2) {
        //     animation.start("visible");
        //     animation2.start("visible");
        // } else if(!inView2) {
        //     animation.start("hidden");
        //     animation2.start("hidden");
        // }
        // console.log("in view = ", inView );
    }, [inView, animation, animation2]);

    return (
        <section className="skill eduwork" id="educations">
            <div className="container">
                <motion.div
                    className="skill-bx wow"
                    variants={contVariant}
                    initial="hidden"
                    whileInView="visible"
                    // viewport={{once: true}}
                    style={{ position: "relative" }}
                >
                    <Title
                        h2={"Educations & Work"}
                        p={"Here are my Education details Work Experience."}
                        txtVariant={txtVariant}
                    />

                    <motion.div className="rows" variants={container}>
                        <div
                            // ref={ref2}
                            className="cols"
                        >
                            <EduWorkCard
                                titlee="My Education"
                                dataa={educationData}
                            />
                        </div>
                        <div ref={ref} className="cols">
                            <EduWorkCard
                                titlee="My Experience"
                                dataa={experienceData}
                                animation={animation}
                                animation2={animation2}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default EducationWork;
