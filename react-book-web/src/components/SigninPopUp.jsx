import React from 'react'
import logo from '../assets/Owl.svg'


export default function SignInPopUp({onClose, onSignUp, onForgotPass}) {
  return (
    <>
        <div className="header">
            <div></div>
            <i className="material-symbols-outlined BtnX" onClick={onClose}>close</i>
        </div>
        <div className="login-wrapper">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <h1>Welcome to Owl Light</h1>
            <form action="" method="post">
                <div className="inputGroup">
                    <input type="text" required autocomplete="off"/>
                    <label for="email">Email</label>
                </div>
                <div className="inputGroup">
                    <input type="password" required autocomplete="off"/>
                    <label for="password">Password</label>
                </div>
                <p className="forgotpass" onClick={onForgotPass}>Forgot Password?</p>
                <button type="submit">Sing In</button>
            </form>
            <h2 className="divider line" contenteditable>Or signin with</h2>
            <button type="submit">Sing In</button>
            <p className="signup">Don't have an account? <span onClick={onSignUp}>Sign Up</span></p>
        </div>
    </>
  )
}

