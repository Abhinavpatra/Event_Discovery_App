
import React from 'react';

const HorizontalScroll = ({ children }) => {
    return (
        <div className="horizontal-scroll-container">
            <div className="horizontal-scroll">
                {children}
            </div>
        </div>
    );
};

export default HorizontalScroll;
