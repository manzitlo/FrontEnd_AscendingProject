import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles.css';

function ViewCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function fetchData() {
      console.log("Fetching cars...");

      // 获取token并打印以进行验证
      const token = localStorage.getItem('token');
      console.log('Token:', token);

      try {
        const response = await axios.get('http://localhost:8080/car', {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        });

        console.log('Cars response:', response.data);
        setCars(response.data);

      } catch (error) {
        if (error.response) {
          console.error('Server responded with an error:', error.response.data);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up the request:', error.message);
        }
      }
    }

    fetchData();
  }, []);  

  return (
    <div className="container mt-4">
        <h2 className="car-list-title">Car List</h2>
        <table className="fancy-table">
            <thead>
                <tr>
                    <th>Car ID</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Color</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                {cars.map(car => (
                    <tr key={car.id}>
                        <td>{car.id}</td>
                        <td>{car.brand}</td>
                        <td>{car.model}</td>
                        <td>{car.color}</td>
                        <td>{car.year}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);



}


export default ViewCars;