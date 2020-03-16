import React from 'react';
import '../Auth/Login.css';

const Register = () => {
        return (
            <section class="login-page register-page">
                <div class="container">
                    <div class="login-title">
                    <h1>Sign<span>Up</span></h1>
                    </div>
                    <div class="login-box">
                    <div class="loginForm">
                        <div class="field-required">
                        <p>Please fill the detail given below</p>
                        </div>
                        <div class="form-fields clearfix">
                            <div class="login-form-row">
                        <div class="form-group">
                            <label>Name <span class="red-color">*</span></label>
                            <div class="form-icon-col"><i class="fa fa-user"></i>
                            <input type="text" placeholder="Email address" name="" />
                            </div>
                        </div>
                        <div class="form-group last-input">
                            <label>Email <span class="red-color">*</span></label>
                            <div class="form-icon-col"><i class="fa fa-envelope"></i>
                            <input type="password" placeholder="Password" name="" />
                            </div>
                        </div>
                        </div>
                            <div class="login-form-row">
                        <div class="form-group">
                            <label>Password <span class="red-color">*</span></label>
                            <div class="form-icon-col"><i class="fa fa-lock"></i>
                            <input type="password" placeholder="Enter Your Password" name="" />
                            </div>
                        </div>
                        <div class="form-group last-input">
                            <label>Country</label>
                            <div class="form-icon-col">
                            <select class="form-control">
                                <option>India</option>
                                <option>UK</option>
                            </select>
                            </div>
                        </div>
                        </div>
                            <div class="login-form-row">
                        <div class="form-group">
                            <label>Phone <span class="red-color">*</span></label>
                            <div class="form-icon-col"><i class="fa fa-phone"></i>
                            <input type="text" placeholder="Enter Your Phone Number" name="" />
                            </div>
                        </div>
                        <div class="form-group last-input">
                            <label>&nbsp;</label>
                            <div class="checkbox abc-checkbox propertyCheck">
                            <input type="checkbox" class="styled" id="checkbox1" />
                            <label for="checkbox1"> Accept <span>terms & conditions </span></label>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div class="full-btn-col">
                        <input type="submit" value="SignUp" name="" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>    
        )
}
export default Register; // Don’t forget to use export default!
