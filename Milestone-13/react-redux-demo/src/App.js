import './App.css';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/store/store';
import UserContainer from './components/UserContainer';
import HomeContainer from './components/HomeContainer';
import HeaderContainer from './components/HeaderContainer';
import LoginContainer from './components/LoginContainer';
import RegisterContainer from './components/RegisterContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <HeaderContainer />
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/users" element={<UserContainer />} />
            <Route path="/login" element={<LoginContainer />} />
            <Route path="/register" element={<RegisterContainer />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
