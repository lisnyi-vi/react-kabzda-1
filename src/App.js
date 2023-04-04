import React from 'react';
import {
  Provider
} from 'react-redux';
import {
  BrowserRouter
} from "react-router-dom"
import store from './redux/redux-store';
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
  
    )
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized
});


let AppContainer = connect(mapStateToProps, { initializeApp })(App)
let MainApp = (props)=> {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </React.StrictMode>
    </BrowserRouter>
  )
}

export default MainApp;