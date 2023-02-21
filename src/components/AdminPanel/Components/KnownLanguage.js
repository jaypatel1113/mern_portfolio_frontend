import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
    addKnownLanguage,
    deleteKnownLanguage,
    getUser,
} from "../../../actions/User";
import Title from "../../SubComponents/Title";
import LabelNdInput from "./SubComponents/LabelNdInput/LabelNdInput";
import { NavLink } from "react-router-dom";
import LanguageAndSkills from "./SubComponents/LanguageAndSkills";

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

const contvar = {
    hidden: {},
    visible: {},
};

const btnVariant = {
    hidden: {
        x: 500,
        opacity: 0,
        scale: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        scale: 1,
    },
};


const KnownLanguage = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const { message, error, loading } = useSelector((state) => state.update);
    const { user } = useSelector((state) => state.user);

    const [name, setName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(addKnownLanguage(name));
        dispatch(getUser());
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: "CLEAR_ERROR" });
        }
        if (message) {
            toast.success(message);
            dispatch({ type: "CLEAR_MESSAGE" });
        }
    }, [error, message, dispatch]);

    return (
        <section className="contact login adminpanel" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={12}>
                        <Title h2={"Known Languages"} txtVariant={txtVariant} />

                        <form onSubmit={handleSubmit}>
                            <motion.div
                                className="row"
                                variants={contvar}
                                initial="hidden"
                                whileInView="visible"
                            >
                                {/* <LabelNdInput
                                    labelRight="Name"
                                    value={formDetails.name}
                                    setVal={setVal}
                                /> */}
                                <LabelNdInput
                                    labelRight="Skill"
                                    value={name}
                                    onChange={(e) =>
                                        setName(e.target.value)
                                    }
                                    className="fullwidth"
                                />

                                <Col
                                    size={12}
                                    className="px-1"
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <motion.button
                                        type="submit"
                                        variants={btnVariant}
                                        transition={{
                                            type: "spring",
                                            bounce: 0.9,
                                            delay: 0.9,
                                            duration: 0.5,
                                        }}
                                        disabled={loading}
                                    >
                                        <span>Add</span>
                                    </motion.button>
                                    <NavLink to='/admin'>
                                        <motion.button
                                            type="submit"
                                            variants={btnVariant}
                                            transition={{
                                                type: "spring",
                                                bounce: 0.9,
                                                delay: 0.9,
                                                duration: 0.5,
                                            }}
                                            disabled={loading}
                                            >
                                            <span>Back</span>
                                        </motion.button>
                                    </NavLink>
                                </Col>
                            </motion.div>
                        </form>
                    </Col>
                </Row>
                
                <div className="containerss" style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center"}}>
                            {user?.languagesKnown?.map((item) => <LanguageAndSkills key={item._id} item={item} i={1} />)}
                        </div>
            </Container>
        </section>
    );
};

export default KnownLanguage;
