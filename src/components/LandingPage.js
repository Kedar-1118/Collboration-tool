import React from "react";

const LandingPage = ({ userId }) => {
    return (
        <div>
            <h1>Welcome, {userId}</h1>
            <p>This is your landing page.</p>
        </div>
    );
};

export default LandingPage;
