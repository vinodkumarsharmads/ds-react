import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect 
} from "react-router-dom";
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import HowItWorks from './Pages/HowItWorks';
import Home from './Pages/Home';
import Login from './Auth/Login';
import Register from './Auth/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
          <div>
		        {/* <ul className="navbar-nav mr-auto">
              <li>
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li>
                <Link className="nav-link" to="/HowItWorks">How It Works</Link>
              </li>
            </ul> */}
            <Switch>
              <Route path="/index">
                <Home />
              </Route>
              <Route path="/HowItWorks">
                <HowItWorks />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Redirect exact from="/" to="/index" />
            </Switch>
          </div>
        </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
