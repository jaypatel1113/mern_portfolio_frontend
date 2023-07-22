import { Col } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
// import { useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";

import gitIcon from "../../assets/img/git.svg";
import liveIcon from "../../assets/img/live.svg";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export const ProjectCard = ({project}) => {
    const { ref, inView } = useInView({ threshold: 0.5 });
    const animation = useAnimation();

    const [initialRender, setInitialRender] = useState({card: false});

    useEffect(() => {
        // console.log(project);
        if(inView) {
            animation.start({
                opacity: 1, scale: 1,
                transition: {
                    delay: 0.2
                },
            });
        } else if(!inView && !initialRender.card) {
            animation.start({
                opacity: 0, scale: 0
            });
            setInitialRender({...initialRender, card: true});
        }
        // console.log("in view = ", inView );
    }, [inView, animation]);

    return (
        <Col size={12} sm={6} md={4} ref={ref}>
            <motion.div
                className="proj-imgbx"
                initial="hidden"
                animate={animation}
            >
                <img src={project.image.url} alt="Error" className="projectImg" />
                <div className="proj-txtx">
                    <h4>{project.title}</h4>
                    <span>{project.techstack}</span>
                    {
                        project.gitLink!=="" && 
                        <a
                            target="_blank"
                            href={project.gitLink}
                            className="git"
                            rel="noreferrer"
                        >
                            <img src={gitIcon} alt="Error" className="projectGit" />
                        </a>
                    }
                    <a
                        target="_blank"
                        href={project.demoLink}
                        className="demo"
                        rel="noreferrer"
                    >
                        <img
                            src={liveIcon}
                            alt="Error"
                            className="projectGit projectDemo"
                        />
                    </a>
                </div>
            </motion.div>
        </Col>
    );
};
