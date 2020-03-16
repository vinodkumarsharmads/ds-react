import React, { Component } from 'react';
import '../Banner/Banner.css';
import BrandLogo from '../Banner/BrandLogo.js';
import SearchIcon from '../assets/images/search.png';

class Banner extends Component {
  render() {
    return (
      <React.Fragment>
      <section className="banner-content">
        <div className="container-fluid">
          <div className="banner-detail banner-middle-detail">
            <div className="banner-text">
              <h1>Find your <span>Dream Jobs TODAY!</span></h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate ex tristique, tristique libero eu, cursus eros. Integer porttitor vitae magna eget molestie. Nam accumsan gravida feugiat.</p>
              <div className="search-job">
                <input className="form-control" type="text" placeholder="Search here" />
                <a href="/" className="btn btn-custom search-btn">Search <img src={SearchIcon} alt={SearchIcon}/></a> 
              </div>
            </div>
          </div>
          <div className="banner-detail banner-left-detail">
            <h2>Client <br/>
              <span>Post a Job</span></h2>
            <div className="banner-buttons"> <a href="/register" className="btn btn-custom register-btn">Register</a> <strong>OR</strong> <a href="/login" className="btn btn-custom login-btn">Login</a> </div>
          </div>
          <div className="banner-detail">
            <h2>Staff <br/>
              <span>Get a Job</span></h2>
            <div className="banner-buttons"> <a href="/register" className="btn btn-custom register-btn">Register</a> <strong>OR</strong> <a href="/login" className="btn btn-custom login-btn">Login</a> </div>
          </div>
        </div>
      </section>
      <div className="clearfix"></div>
      <BrandLogo></BrandLogo>
      </React.Fragment>
    );
  }
}
export default Banner; // Don’t forget to use export default!
