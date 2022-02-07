import './App.css';
import Sidenav from './components/Sidenav/Sidenav';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {

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
          <Route path='/profile/:userId?' render={()=><ProfileContainer  />} />
          {/* <Route path='/dialogs' component={Dialogs} /> */}
          <Route path='/dialogs' render = {()=><DialogsContainer  />} />
          <Route path='/users' component={UsersContainer} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
