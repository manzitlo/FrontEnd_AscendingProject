import React, { useState, useEffect } from 'react';

function ViewCars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');  

    if (!token) {
      console.error("No token found. Redirecting to login page.");
      window.location = "/login";  // Redirect to login page
      return;
    }

    fetch("http://localhost:8080/car", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      if (!response.ok) {
        if(response.status === 401) {
          console.error("Token is not valid or expired. Redirecting to login page.");
          window.location = "/login";
          return;
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log("Received cars:", data);
      setCars(data);
      setLoading(false);
    })
    .catch(err => {
      console.log("Fetch error:", err.message);
      setError(err.message);
      setLoading(false);
    });

  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mt-5">
      <h2>Cars List</h2>
      <p>Test Text</p>
      {/* ... */}
    </div>
  );
  
}

export default ViewCars;