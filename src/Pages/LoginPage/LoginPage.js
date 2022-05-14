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
  const [Host, setHost] = useState(process.env.REACT_APP_HOST);
  let navigate = useNavigate();
  let axios = require("axios");

  const [PageType, setPageType] = useState("login");

  //state register
  const [EmailRegister, setEmailRegister] = useState(null);
  const [PasswrdRegister, setPasswrdRegister] = useState(null);

  //state login
  const [EmailLogin, setEmailLogin] = useState(null);
  const [PasswrdLogin, setPasswrdLogin] = useState(null);

  const handlePageType = (type) => {
    setPageType(type);
    setEmailLogin("");
    setPasswrdLogin("");
    setEmailRegister("");
    setPasswrdRegister("");
  };

  const handleStateRegister = (e) => {
    if (e.target.id === "email-register") {
      setEmailRegister(e.target.value);
    } else if (e.target.id === "password-register") {
      setPasswrdRegister(e.target.value);
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
        if (data) {
          sessionStorage.setItem("Token-customer", data.user.accessToken);
          navigate(`/home`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };



  const registerAdmin = () => {
    let data = JSON.stringify({
      email: EmailRegister,
      password: PasswrdRegister,
      role: "admin",
    });

    let config = {
      method: "post",
      url: `${Host}admin/auth/register`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        alert("akun admin berhasil terdaftar");
        handlePageType("Login");
        setEmailLogin("");
        setPasswrdLogin("");
        setEmailRegister("");
        setPasswrdRegister("");
      })
      .catch(function (error) {
        alert("Register gagal");
      });
  };



  const handleLogin = () => {
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
        alert("login berhasil");
        sessionStorage.setItem("Token", response.data.access_token);
        navigate(`/dashboard`);
      })
      .catch(function (error) {
        alert("login gagal");
      });
  };

  return (
    <div className="login-page">
      <img src={background} alt="background" className="bg-login"/>
      {PageType === "register" ? (
        <div className="register-form">
          <img src={logoLogin} alt="logo" id="logo-form"/>
          <h4>Create new Account</h4>
          <div className="input-form">
            <p>Email</p>
            <input
              id="email-register"
              type="email"
              placeholder="Contoh: johndee@gmail.com"
              value={EmailRegister}
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
              value={PasswrdRegister}
              onChange={(e) => {
                handleStateRegister(e);
              }}
              required
            />
          </div>

          <button
            className="button-form"
            onClick={() => {
              registerAdmin();
            }}
          >
            Sign Up
          </button>
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
          <img src={logoLogin} alt="logo" id="logo-form"/>
          <h4>Welcome, Admin BCR</h4>
          <div className="input-form">
            <p>Email</p>
            <input
              id="email-login"
              type="email"
              placeholder="Contoh: johndee@gmail.com"
              value={EmailLogin}
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
              value={PasswrdLogin}
              onChange={(e) => {
                handleStateLogin(e);
              }}
              required
            />
          </div>
          <button
            className="button-form"
            onClick={() => {
              handleLogin();
            }}
          >
            Sign In
          </button>
          <div className="btn-google">
            <GoogleButton onClick={handleGoogle} />
          </div>
          <p
            className="to-login"
            onClick={() => {
              handlePageType("register");
            }}
          >
            Don't have an account?
          </p>
        </div>
      )}
    </div>
  );
};
