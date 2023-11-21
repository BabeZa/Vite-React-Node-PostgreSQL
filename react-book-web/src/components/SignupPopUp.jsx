import React from 'react'
import logo from '../assets/Owl.svg'


export default function SignUpPopUp({onClose, onSignIn}) {
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
            <h1>Create an account</h1>
            <form action="" method="post">
                <div class="inputGroup">
                    <input type="text" required autocomplete="off"/>
                    <label for="email">Email</label>
                </div>
                <div class="inputGroup">
                    <input type="password" required autocomplete="off"/>
                    <label for="password">Password</label>
                </div>
                <div class="inputGroup">
                    <input type="password" required autocomplete="off"/>
                    <label for="password">Confirm Password</label>
                </div>
                <div class="policy">
                    <input type="checkbox"/>
                    <h3>I accept all terms & condition</h3>
                </div>
                <button type="submit">Sing In</button>
            </form>
            <p class="signup">Have an account? <span onClick={onSignIn}>Sign In</span></p>
        </div>
    </>
  )
}

