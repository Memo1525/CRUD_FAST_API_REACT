import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ManufacturersList from './components/ManufacturersList';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<div>Welcome to FastAPI React Demo</div>} />
          <Route path="/manufacturers" element={<ManufacturersList />} />
          <Route path="/items" element={<div>Items Page Coming Soon</div>} />
          <Route path="/users" element={<div>Users Page Coming Soon</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
