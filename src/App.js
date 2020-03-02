import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from './components/Profile/ProfileContainer';
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";



function App(props) {
  return (
        <BrowserRouter>
          <div className='body'>
              <Header/>
              <Navbar/>
              <div className='content'>
                  <Route path='/profile' render={()=><ProfileContainer/>}/>
                  <Route path='/users' render={()=><UsersContainer/>}/>
              </div>
          </div>
        </BrowserRouter>
  );
}

export default App;
