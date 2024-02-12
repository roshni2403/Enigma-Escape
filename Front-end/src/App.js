import React, { useState } from 'react';
import Login from '../src/Components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/Routes/Header';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (credentials) => {
    
    if (credentials.email === 'test@test.com' && credentials.password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div>
      
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
