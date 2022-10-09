import { motion } from "framer-motion";
import React from "react";

import CardDetail from "./CardDetail";

const itemA = {
    hidden: { opacity: 0, left: "-20vh" },
    visible: { opacity: 1, left: 0, transition: { delay: 1.5 } },
};
const itemB = {
    hidden: { opacity: 0, right: "-20vh" },
    visible: { opacity: 1, right: 0, transition: { delay: 1.5 } },
};

const EduWorkCard = ({ titlee, dataa, animation, animation2 }) => {
    return (
        <>
            <motion.h2
                className="title"
                style={{ position: "relative" }}
                variants={itemA}
                animate={animation}
            >
                {titlee}
            </motion.h2>
            {dataa.map((data, ind) => (
                <CardDetail
                    data={data}
                    key={ind}
                    style={{ position: "relative" }}
                    variants={itemB}
                    animate={animation2}
                />
            ))}
        </>
    );
};

export default EduWorkCard;
