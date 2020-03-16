import React from 'react';
import '../Auth/Login.css';

const Login = () => {
        return (
                <section className="login-page">
                    <div className="container">
                        <div className="login-title"><h1>Log<span>In</span></h1>
						</div>
                        <div className="login-box">
                            <div className="row">
                                <div className="col-md-6 left-log-bar">
                                    <div className="left-log">
                                        <h2>Login with Social</h2>
                                        <div className="or-icon">or</div>
                                        <div className="login-social-icons">
                                            <a href="/"><img src="images/fb_icon.png" alt="" /></a>
                                            <a href="/"><img src="images/google_plus_icon.png" alt="" /></a>
                                        </div>
                                        <div className="login-left-bg"><img src="images/login_left_pannel_bg.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 right-log-bar">
                                    <div className="loginForm">
                                        <div className="form-group">
                                            <label>Email address <span className="red-color">*</span></label>
                                            <div className="form-icon-col"><i className="fa fa-envelope"></i> <input type="text" placeholder="Email address" name="" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Password <span className="red-color">*</span></label>
                                            <div className="form-icon-col"><i className="fa fa-lock"></i> <input type="password" placeholder="Password" name="" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="Login" name="" />
                                            <div className="forgotPassword"><a href="/">Forgot Password?</a> 
                                            </div>
                                        </div>
                                        <div className="form-group margin-B-0 login-note-text">If your are not an exiting customer, you need to <a href="/register">register</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
}
export default Login; // Don’t forget to use export default!
