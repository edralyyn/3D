import React from 'react';

const HoverWindow = ({ content }) => {
    return (
        <div className="hover-window" style={{ position: 'absolute', top: 0, left: 150, width: '500%', height: '100%', backgroundColor: '#ddd', border: '10px solid #194B64', 
        padding: 10, borderTopLeftRadius:20, borderTopRightRadius: 20 }}>
            {content}
        </div>
    );
};

export default HoverWindow;
