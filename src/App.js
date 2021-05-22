import React from 'react';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import './App.css';
import { Header, Signin, Signup } from './components';
import { Home } from './pages';
import PaymentPage from './pages/PaymentPage';
import Browsing from './pages/Browsing';
import Browse from './pages/Browse';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/signin'>
          <Header show={false}>
            <Signin />
          </Header>
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path ="/browsing" >
          <Browsing />
        </Route>
        <Route exact path='/browse'>
          <Browse />
        </Route>
        <Route exact path='/signup'>
          <Header show={false}>
            <Signup />
          </Header>
        </Route>
        <Route exact path='/subscription'>
          <PaymentPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
