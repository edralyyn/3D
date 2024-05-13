import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PCSelector = () => {
    const [selectedPC, setSelectedPC] = useState(1);

    const handlePrevClick = () => {
        setSelectedPC((prevPC) => (prevPC > 1 ? prevPC - 1 : 5));
    };

    const handleNextClick = () => {
        setSelectedPC((prevPC) => (prevPC < 5 ? prevPC + 1 : 1));
    };
//EDRA DITO HERE
    return (
        <div className="d-flex align-items-center justify-content-center">
            <button className="btn btn-light mr-2" onClick={handlePrevClick}>{"<"}</button>
            <span className="h4 mb-0">PC{selectedPC}</span>
            <button className="btn btn-light ml-2" onClick={handleNextClick}>{">"}</button>
        </div>
    );
};

export default PCSelector;
