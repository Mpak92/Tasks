import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar navbar={props.state.navbar} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/*' element={<Profile
              profile={props.state.profile}
              addPost={props.addPost} 
              updateNewPostText={props.updateNewPostText} />} />
            <Route path='/dialogs/*' element={<Dialogs
              dialogs={props.state.dialogs}
              addMessage={props.addMessage} 
              updateNewMessageText={props.updateNewMessageText} />} />
            <Route path='/news/*' element={<News />} />
            <Route path='/music/*' element={<Music />} />
            <Route path='/settings/*' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
