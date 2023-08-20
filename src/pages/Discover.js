import React from 'react';
import PopularCars from '../cars/PopularCars.js';

function Discover() {
    return (
        <div className="container-fluid">
            <h1 className="text-center mt-5 mb-5">Discover</h1>
            <PopularCars />
            {/* You can add other sections like 'Insurance Recommendations' and 'User Shares' here. */}
        </div>
    );
}

export default Discover;
