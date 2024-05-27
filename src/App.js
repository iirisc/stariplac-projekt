import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Naslovna from './Components/Naslovna';
import Jelovnik from './Components/Jelovnik';
import Contact from './Components/Contact';
import Location from './Components/Location';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Naslovna/>} />
          <Route path="/menu" element={<Jelovnik/>} />
          <Route path="/location" element={<Location/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
