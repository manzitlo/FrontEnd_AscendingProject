import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        email: "",
        firstName: "",
        lastName: ""
    });

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/signup", formData);
            if (response.status === 200) {
                setSuccess(true);
                setError(null);
            } else {
                setError("Registration failed.");
                setSuccess(false);
            }
        } catch (err) {
            if (err.response && err.response.data) {
                
                setError(err.response.data);
            } else {
                
                setError(err.message || "An error occurred.");
            }
            setSuccess(false);
        }
    }

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center mb-4">Signup</h2>

                {success && <div className="alert alert-success">Registration successful!</div>}
                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={handleSubmit}>
                    {['name', 'email', 'firstName', 'lastName'].map((field, index) => (
                        <div key={index} className="mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                name={field}
                                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                value={formData[field]} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                    ))}

                    <div className="mb-3 position-relative">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            className="form-control"
                            name="password"
                            placeholder="Password" 
                            value={formData.password} 
                            onChange={handleChange} 
                            required
                        />
                        <button 
                            type="button" 
                            onClick={() => setShowPassword(!showPassword)}
                            className="btn btn-link position-absolute top-50 end-0 translate-middle-y"
                            style={{ zIndex: '1' }}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Signup</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
