import React, { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import service_signup from "../assets/signup.png";

import { Link } from "react-router-dom";

import "../styles/signup.css";

const SignUp = () => {  
  
  return (
    <>
      <Navbar />
      <div className="signup_service">
        <div className="signup_service_header">
          <div className="signup_service_left">
            <div className="signup_service_left_signbox">
                <a href="/signup"><h1 className="signup_service_left_head">Signup</h1></a>
                <a href="/signin"><h1 className="signin_service_left_head">Signin</h1></a>
            </div>
            
            <div className="signup_service_inputs">
              <div className="signup_service_name">
                <input
                  label="First Name"
                  type="text"
                  className="service_signup_inputs signup_service_name_input "
                  placeholder="India"
                  style={{ width: "416px" }}
                  name="country"
                />                
              </div>
              <div className="signup_service_mail">
                <input
                  type="text"
                  className="service_signup_inputs signup_service_mail_input "
                  placeholder="Phone no."
                  style={{ width: "416px" }}
                  name="number"
                />
              </div>
              <div className="signup_service_password">
                <input
                  type="password"
                  className="service_signup_inputs signup_service_password_input "
                  placeholder="Password"
                  style={{ width: "416px" }}
                  name="password"
                />
              </div>
              <div className="signup_service_password">
                <input
                  type="code"
                  className="service_signup_inputs signup_service_password_input "
                  placeholder="Verification code"
                  style={{ width: "416px" }}
                  name="code"
                />
              </div>
              <a href="" style={{paddingLeft: "10px", color: "#ff6800"}}>Get code</a>
              <p className="worker_registration-paralogin" style={{paddingLeft: "10px"}}>
                <input type="checkbox"/>I've read and agreed to Xiaomi's
                <Link to="/workerlogin" className="worker_registration-login" style={{color: "#ff6800"}}>
                &nbsp;User Agreement 
                </Link>
                &nbsp; and
                <Link to="/workerlogin" className="worker_registration-login" style={{color: "#ff6800"}}>
                &nbsp; Privacy Policy.
                </Link>
              </p>
              <div className="signup_service_buttons">
                <div className="signup_service_signup_button_div">
                  <Link to="sign-up">
                    <button
                      className="signup_service_button"
                      type="submit"
                    >
                      Signup
                    </button>
                  </Link>
                </div>
                <p className="signup_service-paralogin">
                  <Link to="/servicelogin" className="signup_service-login">
                    Can't receive verification code?
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="signup_service_right">
            <img
              src={service_signup}
              alt=""
              className="signup_service_banner"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SignUp;
