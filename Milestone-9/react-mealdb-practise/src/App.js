import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Restaurant from './components/Restaurant/Restaurant';
import About from './components/About/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import MealDetail from './components/MealDetail/MealDetail';
import NotFound from './components/NotFound/NotFound';

function App() {
  // State
  const [searchValue, setSearchValue] = useState('');

  // Handler Function
  const handleSearch = (e) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
  }

  return (
    <div className="App">
      <Router>
        <Header handleSearch={handleSearch}></Header>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/restaurant">
              <Restaurant searchValue={searchValue}></Restaurant>
            </Route>
            <Route path="/meal/:id">
              <MealDetail></MealDetail>
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
    </div>
  );
}

export default App;
