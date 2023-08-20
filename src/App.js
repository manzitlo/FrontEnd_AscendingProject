
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ViewCars from './cars/ViewCars';
import Discover from './pages/Discover'; // Add this import at the top with other imports

// import axios from 'axios';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './layout/Footer';

function App() {

//   const token = localStorage.getItem('token');
// if (token) {
//     axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
// }

  return (
      <div className="App">
        <Router>
          <Navbar />

  
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />  {/* Main page */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/" element={<Home />} />
            <Route path="/view-cars" element={<ProtectedRoute />}>
    <Route index element={<ViewCars />} />
</Route>
          </Routes>
        </Router>

        <Footer />
      </div>
    );
}

export default App;
