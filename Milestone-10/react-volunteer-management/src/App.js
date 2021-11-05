import logo from './logo.svg';
import './App.css';
import Header from './components/Shared/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Events from './components/Home/Events/Events';
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import EventRegister from './components/EventRegister/EventRegister';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddEvent from './components/AddEvent/AddEvent';
import VolunteerList from './components/VolunteerList/VolunteerList';
import MyEvents from './components/MyEvents/MyEvents';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/admin">
              <Admin></Admin>
            </Route>
            <PrivateRoute path="/register/:id, :eventName">
              <EventRegister></EventRegister>
            </PrivateRoute>
            <PrivateRoute path="/myevents">
              <MyEvents></MyEvents>
            </PrivateRoute>
            <Route path="/events">
              <Events></Events>
            </Route>
            <PrivateRoute path="/addevent">
              <AddEvent></AddEvent>
            </PrivateRoute>
            <PrivateRoute path="/volunteer-list">
              <VolunteerList></VolunteerList>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
