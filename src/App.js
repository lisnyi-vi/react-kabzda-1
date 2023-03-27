import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Login from './components/Login/Login'
import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"




// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render () {
    if(!this.props.initialized) {
      return <Preloader />
    }
    return (
      <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div class="app-wrapper-content">
         <Routes>
          <Route path="/dialogs/*" element={<DialogsContainer  />} />
          <Route path="/profile/:userId" element={<ProfileContainer  />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/login" element={<Login />} />
         </Routes>
      </div>
      </div>
    </BrowserRouter>
    )
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized
});


export default connect(mapStateToProps, { initializeApp })(App)