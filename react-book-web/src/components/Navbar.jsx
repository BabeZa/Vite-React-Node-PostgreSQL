import React, { useState } from 'react'
import styled from "styled-components";
import logo from '../assets/Owl.svg'
import { Link } from "react-router-dom";
import Modal from './Modal';
import LoginRouterModal from './LoginRouterModal';

const links = [
    { name: "Browse", link: "/browse", icon: "view_list" },
    { name: "ranking", link: "/ranking", icon: "format_list_bulleted" },
    { name: "Create", link: "/create", icon: "stylus_note" },
];

export default function Navbar() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
        <Modal 
            open={openModal} 
            onClose={() => setOpenModal(false)} 
            children={<LoginRouterModal onClose={() => setOpenModal(false)} />}
        />
        <Container>
            <div className="wrapper header-logo">
                <Link className="logo" to={"/"}>
                    <img class="logo-icon" src={logo} alt="Logo" />
                </Link>
                <div className="nav-header">
                    <nav>
                        <ul>
                            {links.map(({ name, link, icon }) => {return (
                                <li key={name}>
                                    <Link to={link} class="nav-link">
                                        <i class="material-symbols-outlined">{icon}</i>
                                        <span>{name}</span>
                                    </Link>
                                </li>
                            )})}
                            <li>
                                <div class="nav-link">
                                    <i class="material-symbols-outlined">search</i>
                                    <span>Search</span> 
                                </div>
                            </li>
                        </ul>
                    </nav> 
                    <div class="user">
                        <button class="button-signin" onClick={() => setOpenModal(true)}>SIGN IN</button>
                    </div>
                </div>
            </div>

        </Container>
        <HideNavbar></HideNavbar>
        </>
    )
}

const HideNavbar = styled.div`
    top: 0;
    height: 5rem;
`;

const Container = styled.div`
    top: 0;
    position: fixed;
    z-index: 90;
    background-color: #fff;
    height: 5rem;
    border-bottom: 1px solid #ededed;
    display: flex;
    justify-content: center;
    width: 100%;
    .nav-header {
        align-items: center;
        display: flex;
        text-decoration: none;
        justify-content: space-between;
        width: 100%;
    }
    .header-logo{
        /* background-color: #cecece; */
        height: 100%;
        align-items: center;
        display: flex;
    }
    img {
        height: 4rem;
    }
    .logo{
        margin: 0 1rem;
    }
    nav {
        margin-left: 1rem;
        
        ul{
            display: flex;
            flex-direction: row;
            gap: 1.5rem;
            font-size: 20px;
            text-decoration: none;
            
            .nav-link{
                color: #1F1717;
                display: flex;
                flex-direction: row;
                align-items: center;
                cursor: pointer;
            }
            i {
                margin-right: 6px;
            }
        }
    }
    .user {
        margin: 0 1rem;
    }

    .button-signin {
        background-color: var(--color_Lavender);
        border-radius: 0.4rem;
        border-style: none;
        /* box-shadow: rgba(245, 244, 247, .25) 0 1px 1px inset; */
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-size: 1.25rem;
        outline: 0;
        text-align: center;
        /* transition: all .6s ease; */
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: bottom;
        padding: 0.5rem 1rem;
    }

    .button-signin:hover {
        background-color: var(--color_Lavender_Dark);
        /* box-shadow: rgba(255, 255, 255, 0) 0 0 0 0 ,rgba(50, 50, 93, .1) 0 5px 5px 0; */
        /* transform: translateY(-1px); */
        /* transform: scale(1.02); */
    }
    .button-signin:active{
        background-color: var(--color_Lavender_Deep);
    }

`;
