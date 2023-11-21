import React from 'react'
import logo from '../assets/Owl.svg'


export default function ForgotPassPopUp({onClose, onSignIn}) {
  return (
    <>
        <div className="header">
            <i class="material-symbols-outlined BtnP" onClick={onSignIn}>arrow_back</i>
            <i class="material-symbols-outlined BtnX" onClick={onClose}>close</i>
        </div>
        <div className="login-wrapper">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <h1>Forgot Password</h1>
            <p class="forgotpass-text">Enter your email and we'll send you a link to rest your password.</p>
            <form action="" method="post">
                <div class="inputGroup">
                    <input type="text" required autocomplete="off"/>
                    <label for="email">Email</label>
                </div>
                <button type="submit">Send Reser Email</button>
            </form>
        </div>
    </>
  )
}

