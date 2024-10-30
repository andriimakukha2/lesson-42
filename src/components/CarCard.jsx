import React from 'react';

const CarCard = ({ car }) => {
    return (
        <div className="car-card">
            <img src={car.imageUrl} alt={car.name} />
            <h3>{car.name}</h3>
            <p>{car.description}</p>
            <button>Детальніше</button>
        </div>
    );
};

export default CarCard;
