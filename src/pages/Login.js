import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const loginUser = async () => {
        console.log('Attempting to login with email:', email);  
        try {
            const response = await axios.post("http://localhost:8080/auth", { email, password });
            const token = response.data;
            localStorage.setItem('token', token);
            console.log('Login successful! Token:', token);  
            window.location = "/test-view-cars";  // redirect to Home page after successful login
        } catch (err) {
            console.error('Login failed:', err);  
            // Assuming the server returns a string as an error message.
            const errorMessage = err.response && err.response.data ? err.response.data : "Login failed!";
            setError(errorMessage);
        }
    }

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center mb-4">Login</h2>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="mb-3 position-relative">
                    <input 
                        type={showPassword ? "text" : "password"} 
                        className="form-control"
                        placeholder="Password" 
                        onChange={e => setPassword(e.target.value)} 
                    />
                    <button 
                        onClick={() => setShowPassword(!showPassword)}
                        className="btn btn-link position-absolute top-50 end-0 translate-middle-y"
                        style={{ zIndex: '1' }}
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </div>
                <button className="btn btn-primary w-100 mb-3" onClick={loginUser}>Login</button>
                {error && <p className="text-danger text-center">{error}</p>}
            </div>
        </div>
    )
}
