import React from "react";

const ExpCard = ({ data }) => {
    return (
        <div className="box">
            <div className="year">
                <img src={data.icon} alt="Error" className="img" />
                {data.year}
            </div>
            <h3 className="bxName">{data.name}</h3>
            <p className="bxDetail" style={{fontSize: "1.5rem"}}>{data.description}</p>
        </div>
    );
};

export default ExpCard;
