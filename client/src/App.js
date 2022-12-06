import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Appointments from './pages/appointment';
import Doctors from './pages/doctor';
import SignUp from './pages/signup';
import Auth from './components/authForm/Auth';


function App() {
  return (
    <div className="App">
      <Auth />
      <Router>
      
      <Navbar />
      <Auth />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/appointments' element={<Appointments/>} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
