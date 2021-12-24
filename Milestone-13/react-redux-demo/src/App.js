import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import MangoContainer from './components/MangoContainer';
import NewMangoContainer from './components/NewMangoContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}
        <HooksCakeContainer />
        <IceCreamContainer />
        <MangoContainer />
        <NewMangoContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
