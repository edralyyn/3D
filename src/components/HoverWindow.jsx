// HoverWindow.jsx
import React from 'react';

const HoverWindow = ({ content }) => {
    return (
        <div className="hover-window" style={{ position: 'absolute', top: 0, left:200, width:100, height:200, backgroundColor: 'white', border: '1px solid black', padding: 10 }}>
            {content}
        </div>
    );
};

export default HoverWindow;
