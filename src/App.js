import React from 'react';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Algos from './pages/algos';
import Cloud from './pages/cloud';
import Health from './pages/health';
import Home from './pages/home';
import Login from './pages/login';
import WebDev from './pages/web-dev';


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/algos" element={<Algos />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/health" element={<Health />} />
          <Route path="/login" element={<Login />} />
          <Route path="/web-dev" element={<WebDev />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



