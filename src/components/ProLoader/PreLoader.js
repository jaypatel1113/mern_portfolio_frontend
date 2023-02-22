import ClockLoader from "react-spinners/ClockLoader";

import "./PreLoader.css";

const PreLoader = () => {
    return (
        <div className="pre-loader">
            <ClockLoader color={"#30ffcf"} size={150} speedMultiplier={5} />
            <div className="loading-text">
                <p>LOADING DETAILS</p>
            </div>
        </div>
    );
};

export default PreLoader;
