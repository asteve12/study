import React from 'react';
import OnBoard from "./pages/onbaord/onbaord"
import SurePage from "./pages/sure/sure"
import StudyPath from './pages/studyPath/studyPath';
import ConfirmCourse from './pages/confirm/confirm';
import HomePage from "./pages/home/home"



//@ts-ignore
import {Routes, Route} from 'react-router-dom';
import Register from './pages/register/register';
import './App.css';




function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<OnBoard></OnBoard>}></Route>
        <Route path='/createAccount' element={<Register />}></Route>
        <Route path='/sure' element={<SurePage />}></Route>
        <Route path='/chooseAStudyPath' element={<StudyPath />}></Route>
        <Route path='/confirmCourse' element={<ConfirmCourse />}></Route>

        <Route path='/homePage' element={<HomePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
