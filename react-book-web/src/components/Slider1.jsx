/*
Ref : https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react
*/

import React, { useState, useEffect } from 'react'
import styled from "styled-components";

const Books = [
    { id: 0, name: "The Call of Cthulhu", link: "/book/00001-The-Call-of-Cthulhu", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221540/Thumbnail/book_detail_large.gif?2" },
    { id: 1, name: "The Colour out of Space", link: "/book/00002-The Colour out of Space", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221543/Thumbnail/book_detail_large.gif?2" },
    { id: 2, name: "At the Mountain of Madness", link: "/book/00003-At the Mountain of Madness", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221551/Thumbnail/book_detail_large.gif?2" },
];
const delay = 2500;

export default function Slider1() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
        () =>
            setIndex((prevIndex) =>
            prevIndex >= Books.length - 1 ? 0 : prevIndex + 1
            ),
        delay
        );

        return () => {
        resetTimeout();
        };
    }, [index]);

  return (
    <Container>
        {index}
        <div className="slider-wrapper">
            <div className="slider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {Books.map(({ id, name, link, imgURL }) => {return(
                    <a href={link}>
                        <img id={"slide-"+id} src={imgURL} alt={name} />
                    </a>
                )})}
            </div>
            <div class="dots">
                {Books.map(({ id}) => {return(
                    <a href={"#slide-"+id} onClick={() => setIndex(id)}></a>
                )})}
            </div>
        </div>
    </Container>
  )
}


const Container = styled.div`

    .slider-wrapper{
        position:relative;
        width:100%;
        margin: 0 auto;
        overflow: hidden;
    }
    .slider{
        display: flex;
        aspect-ratio: 10/9;
        /* overflow: hidden; */
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        border-radius: 4px;
        white-space: nowrap;
        transition: ease 1000ms;

        img{
            width: 480px; 
            flex: 1 0 100%;
            scroll-snap-align: start;
            object-fit: cover;
        }
    }
    .dots {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        gap: 15px;
        z-index: 1;

        display: flex;
        align-items: center;
        justify-content: center;
        
        a{
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #fff;
            opacity: 0.75;
            transition: opacity ease 250ms;
            cursor: pointer;
        }
        a:hover{
            opacity: 1;
        }
    }
`;
