import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/loginform';
import FrontDesk from './pages/frontdesk';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FrontDesk />} exact />
        <Route path="/loginForm" element={<SignUp />} exact />
      </Routes>
    </div>
  );
}

export default App;
