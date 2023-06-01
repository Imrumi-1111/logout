import "./App.css";
import React, { Fragment,useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from "./components/pages/LoginPage/login";
import ProtectedRoute from "./components/routing/routing";
// import Details from "./components/pages/Details/Details";
import Home from './components/pages/Homepage/home';
import SignUp from "./components/pages/RegisterPage/register";
// import ForgotPassword from "./components/pages/LoginPage/ForgotPassword";
// import ResetPasword from "./components/pages/LoginPage/ResetPassword";
import Password from "./components/pages/LoginPage/Password";

function App() {
  const [isAuth, setIsAuth] = useState(null);
  const handleLogin = () => {
    const enteredUsername = 'username';
  const enteredPassword = 'password';

  if (enteredUsername === 'username' && enteredPassword === 'password') {
    setIsAuth(true);
  } else {
    // Handle failed login attempts 
    console.log('Login failed. Invalid credentials.');
  }
    setIsAuth(true);
  }

  const handleLogout = () => {
    // Performed logout logic here
    // Set isAuth to false and redirect to the login page
    localStorage.removeItem('token');
    setIsAuth(false);
    Navigate('/login');
  };
  return (
    <Fragment>
    <div className="App">
      {/* <Home/> */}
      <div>
        <Router>
          <Routes>
            <ProtectedRoute  path="/password" element={<Password />} isAuth={isAuth} onLogout={handleLogout} />
            <ProtectedRoute path="/home" element={<Home />} isAuth={isAuth} onLogout={handleLogout} />
            <Route  path="/login"
          element={<SignIn onLogin={handleLogin} />}/>
          <Route path="/register" 
          element={<SignUp />} />
          </Routes>
        </Router>
        
       
      </div>
    </div>
    </Fragment>
  );
}

export default App;
