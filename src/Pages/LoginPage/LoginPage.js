import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { auth } from "../../Firebase";
import "./loginpage.css";
import background from "../../Assets/Img/login_img.png";
import logoLogin from "../../Assets/Img/logo.png";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const authDef = auth;
  const provider = new GoogleAuthProvider();
  const [Host, setHost] = useState(process.env.REACT_APP_HOST)
  let navigate = useNavigate();

  const [PageType, setPageType] = useState("register");

  //state register
  const [EmailRegister, setEmailRegister] = useState(null);
  const [PasswrdRegister, setPasswrdRegister] = useState(null);
  const [RoleRegister, setRoleRegister] = useState(null);

  //state login
  const [EmailLogin, setEmailLogin] = useState(null);
  const [PasswrdLogin, setPasswrdLogin] = useState(null);

  const handlePageType = (type) => {
    setPageType(type);
  };

  const handleStateRegister = (e) => {
    if (e.target.id === "email-register") {
      setEmailRegister(e.target.value);
    } else if (e.target.id === "password-register") {
      setPasswrdRegister(e.target.value);
    } else if (e.target.id === "role-register") {
      setRoleRegister(e.target.value);
    }
  };

  const handleStateLogin = (e) => {
    if (e.target.id === "email-login") {
      setEmailLogin(e.target.value);
    } else if (e.target.id === "password-login") {
      setPasswrdLogin(e.target.value);
    }
  };

  const handleGoogle = () => {
    signInWithPopup(authDef, provider)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = () => {
    let axios = require("axios");
    let data = JSON.stringify({
      email: EmailLogin,
      password: PasswrdLogin,
    });

    let config = {
      method: "post",
      url: `${Host}admin/auth/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        alert("login berhasil")
        sessionStorage.setItem("Token", response.data.access_token)
        navigate(`/dashboard`)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="login-page">
      <img src={background} alt="background" />
      {PageType === "register" ? (
        <div className="register-form">
          <img src={logoLogin} alt="logo" />
          <h4>Create new Account</h4>
          <div className="input-form">
            <p>Email</p>
            <input
              id="email-register"
              type="email"
              placeholder="Contoh: johndee@gmail.com"
              onChange={(e) => {
                handleStateRegister(e);
              }}
              required
            />
          </div>
          <div className="input-form">
            <p>Password</p>
            <input
              id="password-register"
              type="password"
              placeholder="6+ karakter"
              onChange={(e) => {
                handleStateRegister(e);
              }}
              required
            />
          </div>
          <div className="input-form">
            <p>Role</p>
            <select
              id="role-register"
              onChange={(e) => {
                handleStateRegister(e);
              }}
              required
            >
              <option value="" disabled selected hidden>
                Pilih Role
              </option>
              <option key={1} value={"admin"}>
                Admin
              </option>
              <option key={2} value={"costumer"}>
                Costumer
              </option>
            </select>
          </div>
          <button className="button-form">Sign In</button>
          <p
            className="to-login"
            onClick={() => {
              handlePageType("Login");
            }}
          >
            Already have an account?
          </p>
        </div>
      ) : (
        <div className="login-form">
          <img src={logoLogin} alt="logo" />
          <h4>Welcome, Admin BCR</h4>
          <div className="input-form">
            <p>Email</p>
            <input
              id="email-login"
              type="email"
              placeholder="Contoh: johndee@gmail.com"
              onChange={(e) => {
                handleStateLogin(e);
              }}
              required
            />
          </div>
          <div className="input-form">
            <p>Password</p>
            <input
              id="password-login"
              type="password"
              placeholder="6+ karakter"
              onChange={(e) => {
                handleStateLogin(e);
              }}
              required
            />
          </div>
          <button className="button-form" onClick={()=>{handleLogin()}}>Sign In</button>
          <GoogleButton onClick={handleGoogle} />
        </div>
      )}
    </div>
  );
};
