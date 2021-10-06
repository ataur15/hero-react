import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';
import TodoDetail from './components/TodoDetail/TodoDetail';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import React, { createContext } from 'react';

// Context api
export const RingContext = React.createContext('ring');

function App() {
  let ornaments = 'Diamond Ring';

  return (
    <RingContext.Provider value={ornaments}>
      <Router>
        <Header></Header>
        <div className="main">
          <Switch>
            <Route exact path="/">
              <Todos></Todos>
            </Route>
            <Route path="/todos">
              <Todos></Todos>
            </Route>
            <Route path="/todo/:todoId">
              <TodoDetail></TodoDetail>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </Router>
    </RingContext.Provider>
  );
}

export default App;
