import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
    addEducationTimeline,
    addWorkTimeline,
    deleteEducationTimeline,
    deleteWorkTimeline,
    getUser,
} from "../../../actions/User";
import Title from "../../SubComponents/Title";
import Links from "./SubComponents/Links"
import LabelNdInput from "./SubComponents/LabelNdInput/LabelNdInput";
import { NavLink } from "react-router-dom";
import TimeLine from "./SubComponents/TimeLine";

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


const WorkTimeLine = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const { message, error, loading } = useSelector((state) => state.update);
    const { user } = useSelector((state) => state.user);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [startdate, setStartdate] = useState("");
    const [enddate, setEnddate] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(addWorkTimeline(title, description, startdate, enddate));
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
                        <Title h2={"Work TimeLine"} txtVariant={txtVariant} />

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
                                    labelRight="Title"
                                    value={title}
                                    onChange={(e) =>
                                        setTitle(e.target.value)
                                    }
                                    className="fullwidth"
                                />
                                <LabelNdInput
                                    labelRight="Description"
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                    className="fullwidth"
                                />

                                <Col className={`px-1 adminmargin }`}>
                                    <input
                                        type="date"
                                        value={startdate}
                                        placeholder="Select Start Date"
                                        onChange={(e) =>
                                            setStartdate(e.target.value)
                                        }
                                        title="Start Date"
                                        />
                                </Col>
                                <Col className={`px-1 adminmargin }`}>
                                    <input
                                        type="date"
                                        value={enddate}
                                        placeholder="Select End Date"
                                        onChange={(e) =>
                                            setEnddate(e.target.value)
                                        }
                                        title="End Date"
                                    />
                                </Col>

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
                    {user?.workTimeline?.map((item) => <TimeLine key={item._id} item={item}  i={2} />)}
                </div>
            </Container>
        </section>
    );
};

export default WorkTimeLine;
