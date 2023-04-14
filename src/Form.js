import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./Form.css";
import image from "./ed.png";

const Form = () => {
  return (
    <div>
       <div className="form">
      
        <form>
          <div className="credentials">
          <div className="logo">
        <p>EddieShop</p>
        </div>
            <p className="welcome">Welcome Back</p>
            <p id="email">Your email</p>
            <input
              type="text"
              id="emaill"
              placeholder="name@domain.com"
              
            />
            <p id="password">Password</p>
            <input
              type="password"
              id="passwordd"
              placeholder="at least 8 characters"
              
            />
            <div className="check">
              <input type="checkbox" />
              Keep me logged in
              <p className="forgot">Forgot your password?</p>
            </div>
            <button type="login" className="login">
              Login
            </button>
            <p className="or">
              _________________________ Or ________________________
            </p>
            <div className="icons">
              <div className="facebook">
                <FaFacebook />
              </div>
              <div className="google">
                <FaGoogle />
              </div>
              <div className="instagram">
                <FaInstagram />
              </div>
            </div>
          </div>
        </form>
                
      
      <div className="image">
        <div className="signup">
          <p>
            Don't have an account? <a href="signup">Sign up</a>
          </p>
        </div>
        <img src={image} alt="img" />
      </div>
    </div>
    </div>
  )
}

export default Form
