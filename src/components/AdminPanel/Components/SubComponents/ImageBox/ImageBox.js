import React from "react";

import "../InputBox/InputBox.css";

const ImageBox = (props) => {
    return (
        <>
            {props.value && (
                <div className="imagebox">
                    <img src={props.value} alt={"error"} />
                </div>
            )}
            <div className="inputbox">
                <div className="label">
                    <label htmlFor={props.value}>{props.label}</label>
                </div>
                <div className="input">
                    <input
                        type="file"
                        name={props.value}
                        // value={props.value}
                        onChange={props.onChange}
                        accept="image/*"
                    />
                </div>
            </div>
        </>
    );
};

export default ImageBox;
