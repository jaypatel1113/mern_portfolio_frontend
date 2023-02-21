import React from "react";
import { Col } from "react-bootstrap";
import TextField from "@mui/material/TextField";

const inpVariant = {
    hidden: {
        // width: "0%",
        opacity: 0,
        x: "50vw",
    },
    visible: {
        // width: "100%",
        x: 0,
        opacity: 1,
    },
};

const InputField = ({
    type,
    name,
    value,
    setVal,
    placeholder,
    dly,
    islabel = false,
    labelName,
    fullRow = false,
    avtar = false,
    ...rest
}) => {
    return (
        <Col
            sm={`${fullRow ? 12 : 4}`}
            className={`px-1 adminmargin ${islabel ? "admin-row" : ""} ${fullRow && "admin-top-margin"}`}
        >
            {avtar ? (
                <>
                    <label
                        htmlFor={"avtar"}
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            padding: "1.5rem",
                            borderBottom: "3px solid #fff",
                        }}
                    >
                        {labelName}: Select Image
                    </label>
                    <input
                        type={type}
                        name={name}
                        id="avtar"
                        value={value}
                        placeholder={placeholder}
                        {...rest}
                        style={{ display: "none" }}
                    />
                </>
            ) : fullRow ? (
                <label
                    htmlFor={name}
                    variants={inpVariant}
                    transition={{ delay: dly }}
                >
                    {labelName}
                </label>
            ) : (
                <TextField
                    id="outlined-basic"
                    label={labelName}
                    variant="outlined"
                    name={name}
                    value={value}
                    {...rest}
                />
            )}
        </Col>
    );
};

export default InputField;
