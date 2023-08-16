import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
    const token = localStorage.getItem('token');
    console.log('Token from localStorage:', token);

    // If there's no token, redirect to login page
    if (!token) {
        return <Navigate to="/login" />;
    }

    // Otherwise, render the child component
    return (
        <div>
            <Outlet />
        </div>
    );
}



export default ProtectedRoute;