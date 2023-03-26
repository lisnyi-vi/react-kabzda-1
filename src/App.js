import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Login from './components/Login/Login'
import {BrowserRouter,Routes, Route} from "react-router-dom"

// import logo from './logo.svg';
import './App.css';

const App = (props) => {
  return (
    <BrowserRouter>
      
      <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar/>
        <div class="app-wrapper-content">
         <Routes>
          <Route path="/dialogs/*"  element={<DialogsContainer store={props.store} />}/>
          <Route path="/profile/:userId"  element={<ProfileContainer store={props.store}/>}/>
          <Route path="/users"  element={<UsersContainer/>}/>
          <Route path="/login"  element={<Login/>}/>
         </Routes>
        </div>
      </div>
      
    </BrowserRouter>
  );
}
    

export default App;
