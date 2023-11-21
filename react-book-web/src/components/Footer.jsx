import React from 'react'
import styled from "styled-components";
import logo from '../assets/book1.png'
import { Link, Outlet } from "react-router-dom";

const links = [
    { name: "New", link: "/browse", icon: "today" },
    { name: "Browse", link: "/browse", icon: "view_list" },
    { name: "ranking", link: "/ranking", icon: "format_list_bulleted" },
    { name: "Create", link: "/create", icon: "stylus_note" },
];

export default function Footer() {
    return (
        <Container>
            <div>footer</div>

        </Container> 
    )
}

const Container = styled.div`

    background-color: #1B2430;
    height: 10rem;
    display: flex;
    justify-content: center;
    width: 100%;
    color: white;
`;
