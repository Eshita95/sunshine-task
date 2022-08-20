import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import Services from './Components/Services';
import Login from './Components/Login';
import Footer from './Components/Footer';
import Courses from './Components/Courses';
import Reviews from './Components/Reviews';
import SignUp from './Components/SignUp';
import RequireAuth from './Components/RequireAuth';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={
          <RequireAuth>
            <Services />
          </RequireAuth>
        } />
        <Route path="courses" element={<Courses />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
