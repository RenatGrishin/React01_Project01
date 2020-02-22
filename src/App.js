import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Content from './components/Content/Content';
import Portfolio from './components/Portfolio/Portfolio';
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";



function App(props) {
    let FunContent =()=> <Content/>;
  return (
        <BrowserRouter>
          <div className='body'>
              <Header/>
              <Navbar/>
              <div className='content'>
                  <Route path='/main' render={FunContent} />
                  <Route path='/portfolio' component={Portfolio}/>
                  <Route path='/users' render={()=><UsersContainer/>}/>
              </div>
          </div>
        </BrowserRouter>
  );
}

export default App;
