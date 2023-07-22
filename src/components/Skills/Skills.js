import { motion } from "framer-motion";

import Title from "../SubComponents/Title";
import SkillList from "../SubComponents/SkillList";
import SkillCubeFace from "../SubComponents/SkillCubeFace";

import colorSharp from "../../assets/img/color-sharp.png";

import './Skills.css';

const contVariant = {
    hidden: {
        scale: 0.7,
    },
    visible: {
        scale: 1,
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

const cubeVariant = {
    hidden: {
        top: "-50px",
        opacity: 0,
        scale: 0
    },
    visible: {
        top: 0,
        opacity: 1,
        scale: 1,
        transition: {
            delay: 1
        }
    }
}

const Skills = ({skills, skillImages}) => {
    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <motion.div
                            className="skill-bx wow"
                            variants={contVariant}
                            initial="hidden"
                            whileInView="visible"
                            style={{ position: "relative" }}
                            viewport={{once: true}}
                        >
                            <Title
                                h2={"Skills"}
                                p={"Here are my Top and Prioritized Skills."}
                                txtVariant={txtVariant}
                            />

                            <div className="skillcontainer">
                                <motion.div className="skillcube"
                                    variants={cubeVariant}
                                >
                                    <SkillCubeFace img={skillImages.image1.url} no={1} />
                                    <SkillCubeFace img={skillImages.image2.url} no={2} />
                                    <SkillCubeFace img={skillImages.image3.url} no={3} />
                                    <SkillCubeFace img={skillImages.image4.url} no={4} />
                                    <SkillCubeFace img={skillImages.image5.url} no={5} />
                                    <SkillCubeFace img={skillImages.image6.url} no={6} />
                                </motion.div>
                                <div className="marquee">
                                    <SkillList skills={skills} />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <img
                className="background-image-left"
                src={colorSharp}
                alt="Error"
            />
            <img
                className="background-image-left secimg"
                src={colorSharp}
                alt="Error"
            />
        </section>
    );
};

export default Skills;
