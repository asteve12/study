import React,{useState,useEffect} from 'react';
import OnBoard from "./pages/onbaord/onbaord"
import SurePage from "./pages/sure/sure"
import StudyPath from './pages/studyPath/studyPath';
import ConfirmCourse from './pages/confirm/confirm';
import HomePage from "./pages/home/home"
import Register from './pages/register/register';
import ChatHomePage from "../src/pages/chats/chat"
import Profile from "../src/pages/profile/profile"
import ResourcePage from "../src/pages/resources/resources"
import SchedulePage from "./pages/schedule/schedule"
import CoursePage from "./pages/courses/course"
import LoginPage from "./pages/login/log"
import BluePage from "./pages/bluePage/bluePage"
import {useSelector,useDispatch} from "react-redux"
import { getUsers } from './redux/reducers/login';
import { BrowserRouter } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';



//@ts-ignore
import {Routes, Route,Navigate} from 'react-router-dom';

import './App.css';

// import store from './redux/store';




function App() {
  //@ts-ignore
  const signedinUser = useSelector((state) => state.login);
  //@ts-ignore
  const signedupUser = useSelector((state) => state.signin);
  const [loading, setLoading] = useState(true);
  const dispatchAuthentication = useDispatch();

  useEffect(() => {
   
  
   
      dispatchAuthentication(getUsers({type:"keepuser"}));
  
   
  });

  if (signedinUser.loading) {
    return (
      <section className='loaderWrapper'>
        <div>
          <Circles color='#315292' ariaLabel='loading-indicator' />
        </div>
      </section>
    );
  }
if (signedinUser.netWorkError){
  return <div>network error try again</div>
}
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path='/register' element={<OnBoard />}></Route>
            <Route path='/' element={<LoginPage />}></Route>
            <Route path='/createAccount' element={<Register />}></Route>
            <Route path='/sure' element={<SurePage />}></Route>
            <Route path='/chooseAStudyPath' element={<StudyPath />}></Route>
            <Route path='/confirmCourse' element={<ConfirmCourse />}></Route>
            <Route
              path='/homePage'
              element={
                signedinUser.email || signedupUser.Email ? (
                  <HomePage />
                ) : (
                  <Navigate replace to='/' />
                )
              }
            ></Route>
            <Route
              path='/Chats'
              element={
                signedinUser.email || signedupUser.Email ? (
                  <ChatHomePage />
                ) : (
                  <Navigate replace to='/login' />
                )
              }
            ></Route>
            <Route
              path='/Profile'
              element={
                signedinUser.email || signedupUser.Email ? (
                  <Profile />
                ) : (
                  <Navigate replace to='/login' />
                )
              }
            ></Route>
            <Route
              path='/Resources'
              element={
                signedinUser.email || signedupUser.Email ? (
                  <ResourcePage />
                ) : (
                  <Navigate replace to='/' />
                )
              }
            ></Route>
            <Route
              path='/schedule'
              element={
                signedinUser.email || signedupUser.Email ? (
                  <SchedulePage />
                ) : (
                  <Navigate replace to='/' />
                )
              }
            ></Route>
            <Route
              path='/Courses'
              element={
                signedinUser.email || signedupUser.Email ? (
                  <CoursePage />
                ) : (
                  <Navigate replace to='/' />
                )
              }
            ></Route>
          
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
