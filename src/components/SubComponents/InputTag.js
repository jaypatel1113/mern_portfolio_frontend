import React from "react";
import { Col } from "react-bootstrap";
import { motion } from "framer-motion";

const inpVariant = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    visible: {
        x: 0,
        opacity: 1,
    },
};

const InputTag = ({ type, name, value, setVal, placeholder, dly, loginPage=false }) => {
    return (
        <Col size={12} sm={`${loginPage ? 12 : 6}`} className="px-1">
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
