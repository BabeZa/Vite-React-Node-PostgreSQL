import React, { useState } from 'react'
import styled from "styled-components";
import SignInPopUp from './SigninPopUp';
import SignUpPopUp from './SignupPopUp';
import ForgotPassPopUp from './ForgotPassPopUp';

export default function LoginRouterModal({onClose}) {
    const [page, setPage] = useState('signin');
    return (
        <Container>
            {(page == 'signin') && <SignInPopUp onClose={onClose} onSignUp={() => setPage('signup')} onForgotPass={() => setPage('forgot')}/>}
            {(page == 'signup') && <SignUpPopUp onClose={onClose} onSignIn={() => setPage('signin')}/>}
            {(page == 'forgot') && <ForgotPassPopUp onClose={onClose} onSignIn={() => setPage('signin')}/>}
            
        </Container>
        
    )
}

const Container = styled.div`
    width: 440px;
    height: 580px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    
    .header{
        display:flex;
        justify-content: space-between;
        padding: 1.5rem 1.5rem;
    }

    .BtnP{
        cursor: pointer;
        font-size: 2rem;
    }

    .BtnX{
        color: var(--color_gray);
        cursor: pointer;
        font-size: 2rem;
        transition-duration: 0.5s;
    }
    .BtnX:hover{
        transform: rotate(90deg);
    }

    .forgotpass-text{
        text-align: start;
        margin-top: 1rem;
    }
    
    .login-wrapper{
        text-align: center;
        /* background-color: red; */
        width: 70%;
        margin: 0 auto;

        img {
            height: 4rem;
        }
        
        h1{
            margin-top: 1rem;
            font-size: 1.8rem;
        }
        form > p{
            text-align: end;
            margin-bottom: 1.5rem;
            cursor: pointer;
        }
        button{
            width: 100%;
            padding: 0.6rem;
            font-size: 1rem;
            background-color: var(--color_7);
            color: white;
            border: none;
            border-radius: 0.3rem;
            cursor: pointer;
        }
        .policy{
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem;
        }
        .policy h3{
            color: #707070;
            font-size: 14px;
            font-weight: 500;
            margin-left: 10px;
        }
        
    }

    /* @media (max-height: 600px) {
        margin: 8rem 0 2rem 0;
    } */
    .inputGroup {
        width: 100%;
        position: relative;
        margin: 1rem 0;
        
    }
    .inputGroup input {
        display: block;
        padding: 0.5em;
        outline: none;
        font-size: 1rem;
        border: 2px solid var(--color_gray_4);
        border-radius: 0.3rem;
        width: 100%;
    }

    .inputGroup label {
        font-size: 1rem;
        position: absolute;
        left: 0;
        top: 0;
        padding: 0.6em;
        margin-left: 0.5em;
        pointer-events: none;
        transition: all 0.3s ease;
        color: var(--color_gray_5);
    }
    .inputGroup :is(input:focus, input:valid)~label {
        transform: translateY(-50%) scale(.9);
        margin: 0em;
        margin-left: 1rem;
        padding: 0.2rem; 
        background-color: #fff;
    }
    .inputGroup :is(input:focus, input:valid) {
        border-color: var(--color_6);
    }

    .line {
        display: flex;
        align-items: center;
        margin: 1.5rem -1rem;
        color: var(--color_gray);
        font-size: 0.9rem;
        
        &:before,
        &:after {
            content: "";
            flex: 1;
            height: 1px;
            margin: 0 1em;
            background: var(--color_gray_5);
        }
    }

    .signup{
        margin-top: 1rem;
    }
    .signup span{
        color: blue;
        cursor: pointer;
    }
`;
