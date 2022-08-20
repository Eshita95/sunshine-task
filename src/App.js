import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
