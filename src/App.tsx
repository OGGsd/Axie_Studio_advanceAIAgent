import React from 'react';
import { BrowserRouter as Router, Routes, Route, useState } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TermsPage from './pages/TermsPage';
import CoverPage from './components/CoverPage';

function App() {
  const [showCover, setShowCover] = useState(true);

  const handleStartCall = () => {
    setShowCover(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Routes>
          <Route path="/" element={
            showCover ? (
              <CoverPage onStartCall={handleStartCall} />
            ) : (
              <HomePage />
            )
          } />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;