import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EditBookPage from './pages/EditBookPage';
import BookDetails from './components/BookDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit/:id" element={<EditBookPage />} />
        <Route path="/details/:id" element={<BookDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
