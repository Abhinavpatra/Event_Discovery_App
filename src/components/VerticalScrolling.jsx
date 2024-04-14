import React, { Suspense } from 'react';
 
const VerticalScrolling = ({ children }) => {
    return (
        <div className="vertical-scroll-container" style={{ height: '80vh', overflowY: 'scroll', backgroundColor: '#f0f0f0' }}>
            <Suspense fallback={<p>Loading...</p>}>
                <div className="horizontal-scroll">{children}</div>
            </Suspense>
        </div>
    );
};

export default VerticalScrolling;
