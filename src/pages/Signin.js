import React from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import service_login from "../assets/signup.png";

import { Link } from "react-router-dom";

import "../styles/signin.css";

const Signin = () => {


  return (
    <>
      <Navbar />
      <div className="login_service">
        <div className="login_service_header">
          <div className="login_service_right">
            <img src={service_login} alt="" className="login_service_banner" />
          </div>
          <div className="login_service_left">
            <div className="signup_service_left_signbox">
                <a href="/signup"><h1 className="signin_service_left_head">Signup</h1></a>
                <a href="/signin"><h1 className="signup_service_left_head">Signin</h1></a>
            </div>
            <div className="login_service_inputs">              
              <div className="login_service_mail">
              <input
                  type="text"
                  className="service_signup_inputs signup_service_mail_input "
                  placeholder="Phone no."
                  style={{ width: "416px" }}
                  name="number"
                />
              </div>
              <div className="login_service_password">
                <input type="password" className="login_service_password_input" placeholder="Password"  style={{width: "416px"}} name = "password"/>
              </div>
              <div className="signup_service_buttons">
                <div className="signup_service_signup_button_div">
                  <Link to="sign-up">
                    <button
                      className="signup_service_button"
                      type="submit"
                    >
                      Signin
                    </button>
                  </Link>
                </div>
                <p className="signup_service-paralogin">
                  <Link to="/servicelogin" className="signup_service-login">
                    Forgot password?
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>               
      </div>     

      <Footer />
    </>
  )
}

export default Signin