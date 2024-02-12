import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header'; // Import your Header component
import Login from './Components/Login';
import Register from './Components/Register';

ReactDOM.render(
  <Router>
    <Header /> {/* Include the Header component outside the Routes */}
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Define other routes for your application */}
    </Routes>
  </Router>,
  document.getElementById('root')
);
