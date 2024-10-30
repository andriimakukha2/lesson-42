import React from 'react';

const Cars = () => {
    const cars = [
        {
            id: 1,
            name: 'Tesla Model S',
            description: 'Електричний седан з вражаючими характеристиками.',
            img: 'https://images.unsplash.com/photo-1600154864936-4b9c3a82f65f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
        },
        {
            id: 2,
            name: 'BMW M3',
            description: 'Спортивний автомобіль з вражаючими динамічними характеристиками.',
            img: 'https://images.unsplash.com/photo-1600490946131-7aa761dc7af0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
        },
        {
            id: 3,
            name: 'Audi A8',
            description: 'Розкішний седан з високим рівнем комфорту і технологій.',
            img: 'https://images.unsplash.com/photo-1580209429434-b91c4209a4ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
        },
        {
            id: 4,
            name: 'Mercedes-Benz S-Class',
            description: 'Символ розкоші та інновацій у світі автомобілів.',
            img: 'https://images.unsplash.com/photo-1553016721-42c28e0667f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
        },
        {
            id: 5,
            name: 'Porsche 911',
            description: 'Класичний спортивний автомобіль з видатними характеристиками.',
            img: 'https://images.unsplash.com/photo-1524663402665-f005fc2be6e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
        },
        {
            id: 6,
            name: 'Ford Mustang',
            description: 'Американський класичний спортивний автомобіль з потужним двигуном.',
            img: 'https://images.unsplash.com/photo-1603642307358-d3b77c0e9ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
        },
        {
            id: 7,
            name: 'Lamborghini Aventador',
            description: 'Суперкар з неймовірним дизайном і потужністю.',
            img: 'https://images.unsplash.com/photo-1599348530582-36f429fe65cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
        },
        {
            id: 8,
            name: 'Ferrari 488',
            description: 'Спортивний автомобіль з видатною продуктивністю та дизайном.',
            img: 'https://images.unsplash.com/photo-1557672441-bd157f47d164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
        },
        {
            id: 9,
            name: 'Toyota Camry',
            description: 'Надійний седан з комфортом та ефективністю.',
            img: 'https://images.unsplash.com/photo-1602418442678-e08a8e1d27bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
        },
        {
            id: 10,
            name: 'Honda Accord',
            description: 'Комфортний седан з високим рівнем надійності.',
            img: 'https://images.unsplash.com/photo-1517851117623-e3c3c53e7f7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
        },
        {
            id: 11,
            name: 'Chevrolet Corvette',
            description: 'Суперкар, що поєднує стиль і продуктивність.',
            img: 'https://images.unsplash.com/photo-1560829729-1b1c50ec88b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
        },
        {
            id: 12,
            name: 'Nissan GT-R',
            description: 'Спортивний автомобіль з неймовірною швидкістю та технологіями.',
            img: 'https://images.unsplash.com/photo-1599825358550-3e15cc2d4ed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
        },
        {
            id: 13,
            name: 'Volkswagen Golf',
            description: 'Практичний хетчбек, який поєднує стиль і функціональність.',
            img: 'https://images.unsplash.com/photo-1600402612032-e4c8f615a0b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
        },
        {
            id: 14,
            name: 'Hyundai Elantra',
            description: 'Комфортний і економічний седан для щоденного використання.',
            img: 'https://images.unsplash.com/photo-1602562520832-2b597239e0c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
        },
        {
            id: 15,
            name: 'Kia Stinger',
            description: 'Спортивний автомобіль з елегантним дизайном та високими показниками.',
            img: 'https://images.unsplash.com/photo-1507622246202-86b9d35e8aa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
        },
        {
            id: 16,
            name: 'Mazda MX-5',
            description: 'Легкий спортивний автомобіль, що забезпечує відмінну керованість.',
            img: 'https://images.unsplash.com/photo-1552541979-0df0386bb49a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
        },
        {
            id: 17,
            name: 'Subaru WRX',
            description: 'Спортивний автомобіль з відмінною прохідністю та потужним двигуном.',
            img: 'https://images.unsplash.com/photo-1558969250-37a06e6afc6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
        },
        {
            id: 18,
            name: 'Volvo XC90',
            description: 'Розкішний SUV з високими показниками безпеки та комфортом.',
            img: 'https://images.unsplash.com/photo-1604396744694-1b6f19e5c2f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
        },
    ];

    return (
        <div className="cars">
            <h2>Список автомобілів</h2>
            <div className="car-list">
                {cars.map((car) => (
                    <div className="car-card" key={car.id}>
                        <img src={car.img} alt={car.name} />
                        <h3>{car.name}</h3>
                        <p>{car.description}</p>
                        <button className="button">Детальніше</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cars;