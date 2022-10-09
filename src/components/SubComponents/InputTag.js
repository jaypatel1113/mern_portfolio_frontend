import React from "react";
import { Col } from "react-bootstrap";
import { motion } from "framer-motion";

const inpVariant = {
    hidden: {
        width: "0%",
        x: "50vw",
        opacity: 0,
    },
    visible: {
        width: "100%",
        x: 0,
        opacity: 1,
    },
};

const InputTag = ({ type, name, value, setVal, placeholder, dly }) => {
    return (
        <Col size={12} sm={6} className="px-1">
            <motion.input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={setVal}
                variants={inpVariant}
                transition={{ delay: dly }}
            />
        </Col>
    );
};

export default InputTag;
