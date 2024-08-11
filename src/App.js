import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TutorialsPage from './pages/TutorialsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/tutoriales" element={<TutorialsPage />} />
          {/* Agrega otras rutas aquí si es necesario */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
