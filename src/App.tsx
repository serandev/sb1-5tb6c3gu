import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InvitationPage from './pages/InvitationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InvitationPage />} />
      </Routes>
    </Router>
  );
}

export default App;