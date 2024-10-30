import React from 'react';

const CarDetail = ({ car }) => {
    return (
        <div>
            <h2>{car.name}</h2>
            <img src={car.imageUrl} alt={car.name} />
            <p>{car.description}</p>
            {/* Додаткова інформація */}
        </div>
    );
};

export default CarDetail;
