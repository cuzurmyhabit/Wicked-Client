import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CameraCapturePage from './pages/CameraCapturePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/capture" element={<CameraCapturePage />} />
        <Route path="/" element={<h1>라우팅 예시</h1>} />
      </Routes>
    </Router>
  );
}

export default App;