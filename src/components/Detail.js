import React from "react";

const Detail = ({ src, name, value }) => {
    return (
        <h3>
            <span>
                <img src={src} alt="Error" className="img" />
                {name} :
            </span>
            {" "+ value}
        </h3>
    );
};

export default Detail;
