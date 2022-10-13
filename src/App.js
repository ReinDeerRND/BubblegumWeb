import './App.css';
import Sidenav from './components/Sidenav/Sidenav';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
//import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import React, { Suspense } from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
//import { withRouter } from 'react-router-dom';
import { initApp } from './redux/reducers/app.reducer';
import { Provider } from 'react-redux';
import store from './redux/store';

//lazy-loading components
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(()=>import('./components/Users/UsersContainer'));

class Wrapper extends React.Component {
  componentDidMount() {
    this.props.initApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <BrowserRouter>
        <div className="wrapper">
          <div className="header">
            <HeaderContainer />
          </div>
          <div className="sidenav">
            <Sidenav />
          </div>
          <div className="content">
            {/* <Route path='/profile' component={Profile} /> */}
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            {/* <Route path='/dialogs' component={Dialogs} /> */}
            <Route path='/dialogs' render={() => {
              return <Suspense fallback={<Preloader />}>
                <DialogsContainer />
              </Suspense>
            }} />
            <Route path='/users' render={() => {
              return <Suspense fallback={<Preloader />}>
                <UsersContainer />
              </Suspense>
            }} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
            <Route path='/login' component={Login} />
          </div>
        </div>
      </BrowserRouter>
    );
  }

}

const mapStateToProps = (state) => ({
  initialized: state.app.isInitialized
})

const WrapperContainer = compose(
  // withRouter,
  connect(mapStateToProps, { initApp })
)(Wrapper);

const App = () => {
  return <React.StrictMode>
    <Provider store={store}>
      <WrapperContainer />
    </Provider>
  </React.StrictMode>
}

export default App;

