import React from 'react';
import OnBoard from "./pages/onbaord/onbaord"
import SurePage from "./pages/sure/sure"


//@ts-ignore
import {Routes, Route,Link } from 'react-router-dom';
import Register from './pages/register/register';
import './App.css';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<OnBoard></OnBoard>}></Route>
        <Route path='/createAccount' element={<Register />}></Route>
        <Route path='/sure' element={<SurePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
