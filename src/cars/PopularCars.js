import React from 'react';
import { Carousel } from 'react-bootstrap';
import corollaImage from '../pictures/corolla.png';
import teslaSImage from '../pictures/tesla_s.jpeg';


const popularCarsData = [
  {
    brand: "Toyota",
    model: "Corolla",
    image: corollaImage,
    description: "A short description about Toyota Corolla."
  },
  {
    brand: "Tesla",
    model: "Model S",
    image: teslaSImage,
    description: "A short description about Tesla Model S."
  },
  // ... add more cars as needed
];

const PopularCars = () => {
  return (
    <div>
      <h2>Popular Cars</h2>
      <Carousel pause="hover">
        {popularCarsData.map((car, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100 custom-carousel-img" src={car.image} alt={car.model} />
            <Carousel.Caption>
              <h3>{car.brand} {car.model}</h3>
              <p>{car.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default PopularCars;
