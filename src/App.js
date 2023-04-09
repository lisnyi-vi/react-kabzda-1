import React from 'react';
import {
  Provider
} from 'react-redux';
import {
  HashRouter, 
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom"
import store from './redux/redux-store';
import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar'
import UsersContainer from './components/Users/UsersContainer'
import Login from './components/Login/Login'
import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import './App.css';
import {withSuspense} from "./hoc/withSuspense"
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
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
           <Route path="/" element={<Navigate to={"/profile/*"}/> } />
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
            <Route path="*" element={<div>404 NOT FOUND</div>} />
           </Routes>
         
      </div>
      </div>
  
    )
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized
});
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

let AppContainer = compose(withRouter, connect(mapStateToProps, { initializeApp }))(App)
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