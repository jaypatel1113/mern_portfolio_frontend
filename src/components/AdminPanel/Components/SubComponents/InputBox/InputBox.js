import React from "react";

import "./InputBox.css";

const InputBox = (props) => {
    return (
        <div className="inputbox">
            <div className="label">
                <label htmlFor={`${props.value}`}>{props.label}</label>
            </div>
            <div className="input">
                {props.select ? (
                    <select value={props.value} onChange={props.onChange}>
                        <option value="Available">Available</option>
                        <option value="Not Available">Not Available</option>
                    </select>
                ) : (
                    <input
                        type={`${props.isDate ? "date" : "text"}`}
                        name={props.value}
                        value={props.value}
                        onChange={props.onChange}
                    />
                )}
            </div>
        </div>
    );
};

export default InputBox;
