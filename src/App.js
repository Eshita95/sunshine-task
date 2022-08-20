import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import Services from './Components/Services';
import Login from './Components/Login';
import Footer from './Components/Footer';
import Courses from './Components/Courses';
import Reviews from './Components/Reviews';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="courses" element={<Courses />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
