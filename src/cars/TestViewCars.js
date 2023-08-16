import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function TestViewCars() {
    const mockCars = [
        { id: 1, brand: 'Toyota', year: 2023, model: 'Camry', color: 'Blue' },
        { id: 2, brand: 'Honda', year: 2022, model: 'Civic', color: 'Red' },
        // ... 添加更多车辆数据
      ];
      
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

      useEffect(() => {
        // 模拟异步数据获取过程
        setTimeout(() => {
          setLoading(false); // 数据加载完成，设置 loading 为 false
          // 模拟数据获取出错
          // setError('An error occurred while fetching data.'); // 取消这行注释以模拟错误
        }, 2000); // 模拟加载时间为 2 秒
    
        // 取消注释以模拟错误
        // setError('An error occurred while fetching data.');
      }, []);
      
      if (loading) {
        return <p>Loading...</p>;
      }
      
      if (error) {
        return <p>Error: {error}</p>;
      }
      
      return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              Car Insurance Statistic Application
            </Link>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <button className='btn btn-outline-light me-2'>My Account</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-5">
          <h2>Cars List</h2>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Brand</th>
                <th>Year</th>
                <th>Model</th>
                <th>Color</th>
              </tr>
            </thead>
            <tbody>
              {mockCars.map((car) => (
                <tr key={car.id}>
                  <td>{car.id}</td>
                  <td>{car.brand}</td>
                  <td>{car.year}</td>
                  <td>{car.model}</td>
                  <td>{car.color}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
            </div>
      );
      
}
