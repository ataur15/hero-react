import './App.css';
import Header from './components/Shared/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import ProductDetail from './components/ProductDetail/ProductDetail';
import AuthProvider from './context/AuthProvider';
import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  /**
   * Quantity plus and minus
   */
  const [count, setCount] = useState(1);

  const plus = () => {
    setCount(count + 1);
  }

  const minus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <AuthProvider>
        <Router>
          <Header productCount={count}></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/single/:id">
              <ProductDetail plus={plus} minus={minus} count={count}></ProductDetail>
            </Route>
            <Route path="/cart/:id">
              <Cart plus={plus} minus={minus} count={count}></Cart>
            </Route>
            <PrivateRoute path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
