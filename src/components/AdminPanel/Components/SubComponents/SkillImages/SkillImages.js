import React from "react";
import { Col } from "react-bootstrap";

const SkillImages = ({ handleImage, i }) => {
    return (
        <>
            <Col md={4} sm={6} xs={12} className="skillimage">
                <Col>
                    <label htmlFor={`image${i}`} className="custom-file-upload">
                        Image {i}
                    </label>
                    <input
                        type="file"
                        className="fileUpload"
                        onChange={(e) => handleImage(e, i)}
                        accept="image/*"
                        id={`image${i}`}
                    />
                </Col>
            </Col>
        </>
    );
};

export default SkillImages;
