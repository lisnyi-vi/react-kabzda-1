import React from 'react';
import {
  Provider
} from 'react-redux';
import {
  HashRouter
} from "react-router-dom"
import store from './redux/redux-store';
import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar'
import UsersContainer from './components/Users/UsersContainer'
import Login from './components/Login/Login'
import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import {
  Routes,
  Route
} from "react-router-dom"
import './App.css';
import {withSuspense} from "./hoc/withSuspense"
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
// import ProfileContainer from './components/Profile/ProfileContainer'

// import DialogsContainer from './components/Dialogs/DialogsContainer'
const DialogsContainer = React.lazy(()=> import("./components/Dialogs/DialogsContainer"));


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
            <Route path="/dialogs/*" element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <DialogsContainer />
                </React.Suspense>
              }/>
            
            <Route path="/profile/:userId" element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <ProfileContainer />
                </React.Suspense>
              } />
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
    // basename={process.env.PUBLIC_URL}
    <HashRouter >
      <React.StrictMode>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </React.StrictMode>
    </HashRouter>
  )
}

export default MainApp;

// <Route path="/profile/:userId" element={withSuspense(ProfileContainer)} /> 