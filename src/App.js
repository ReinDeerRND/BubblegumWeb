import './App.css';
import Header from './components/Header/Header';
import Sidenav from './components/Sidenav/Sidenav';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="header">
          <Header />
        </div>
        <div className="sidenav">
          <Sidenav />
        </div>
        <div className="content">
          {/* <Route path='/profile' component={Profile} /> */}
          <Route path='/profile' render={()=><ProfileContainer  />} />
          {/* <Route path='/dialogs' component={Dialogs} /> */}
          <Route path='/dialogs' render = {()=><DialogsContainer  />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/users' component={UsersContainer} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
