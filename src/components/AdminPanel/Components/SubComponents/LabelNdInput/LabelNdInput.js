import React from "react";

import InputField from "../InputField/InputField";

import './LabelNdInput.css';

const LabelNdInput = ({ labelRight, value, fullRow, avtar, ...rest }) => {
    return (
        <>
            <InputField
                type="text"
                name={labelRight}
                placeholder={`Enter new ${labelRight}`}
                value={value}islabel={true}
                labelName={`Update ${labelRight}`}
                fullRow={fullRow}
                avtar={avtar}
                {...rest}
            />
        </>
    );
};

export default LabelNdInput;
