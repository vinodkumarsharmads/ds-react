import React from 'react';
import '../Header/Header.css';
import logo from '../assets/images/logo.png';


function Header() {
  return (
    <React.Fragment>
      <header>
        <div className="container">
          <div className="logo"> <a href="index.html"><img src={logo} alt="logo" /></a> </div>
          <div className="navbar-menu">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active"> <a className="nav-link" href="/index">Home</a> </li>
                  <li className="nav-item"> <a className="nav-link" href="/">Jobs</a> </li>
                  <li className="nav-item"> <a className="nav-link" href="/HowItWorks">How it works</a> </li>
                  <li className="nav-item"> <a className="nav-link" href="/">Contact us</a> </li>

                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <div className="clearfix"></div>
    </React.Fragment>
  );
}

export default Header;
