import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Sidenav from './components/Sidenav/Sidenav';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="header">
          <Header />
        </div>
        <div className="sidenav">
          <Sidenav friendsWidget={props.store.getState().friendsWidget} />
        </div>
        <div className="content">
          {/* <Route path='/profile' component={Profile} /> */}
          <Route path='/profile' render={()=><Profile store={props.store} />} />
          {/* <Route path='/dialogs' component={Dialogs} /> */}
          <Route path='/dialogs' render = {()=><DialogsContainer store={props.store} />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
