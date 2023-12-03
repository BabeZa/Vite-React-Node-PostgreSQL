/*
Ref : https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react
*/

import React, { useState, useEffect } from 'react'
import styled from "styled-components";

const Books = [
    { id: 0, name: "The Call of Cthulhu", link: "/book/00001-The-Call-of-Cthulhu", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221540/Thumbnail/book_detail_large.gif?2", dec: "Of such great powers or beings there may be conceivably a survival ... a survival of a hugely remote period when ... consciousness was manifested, perhaps, in shapes and forms long since withdrawn before the tide of advancing humanity ..." },
    { id: 1, name: "The Colour out of Space", link: "/book/00002-The Colour out of Space", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221543/Thumbnail/book_detail_large.gif?2", dec: "Here is a totally different story that we can highly recommend to you. We could wax rhapsodical in our praise, as the story is one of the finest pieces of literature it has been our good fortune to read. The theme is original, ..." },
    { id: 2, name: "At the Mountain of Madness", link: "/book/00003-At the Mountain of Madness", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221551/Thumbnail/book_detail_large.gif?2", dec: "I am forced into speech because men of science have refused to follow my advice without knowing why. It is altogether against my will that I tell my reasons for opposing this contemplated invasion of the antarctic—with its ..." },
];
const delay = 20000;

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
        <div className="slider-wrapper">
            <div className="slider" >
                {Books.map(({ id, name, link, imgURL, dec }) => {return(
                    <a key={id} href={link} className="slider-item" id={"slide-"+id} style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                        <div className="slider-bg" style={{backgroundImage: `url(${imgURL})`}}></div>
                        <div className="slider-content">
                            <div className="slider-content-text">
                                <h1>{name}</h1>
                                <p>{dec}</p>
                            </div>
                            
                            <div className="slider-content-img">
                                <img src={imgURL} alt={name} />
                            </div>
                            
                        </div>
                    </a>
                )})}
            </div>
            <div className="dots">
                {Books.map(({ id }) => {return(
                    <span onClick={() => setIndex(id)}></span>
                )})}
            </div>
        </div>
    </Container>
  )
}


const Container = styled.div`
    margin-top: 1rem;

    .slider-wrapper{
        position:relative;
        width:100%;
        margin: 0 auto;
        /* overflow: hidden; */
        z-index: 1;
    }
    .slider{
        display: flex;
        /* aspect-ratio: 10/9; */
        overflow: hidden;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        border-radius: 4px;
        white-space: nowrap;
        transition: ease 1000ms;
        width: 100%;
        height: 17rem;
    }

    .slider-item{
        position:relative;
        width: 100%;
        flex: 1 0 100%;

    }
    .slider-content{
        position:absolute;
        width: 100%; 
        height: 100%;
        display: grid;
        grid-template-columns: 40% 60%;
        grid-template-rows: 100%;
        z-index: 1;
    }
    .slider-content-img{
        grid-column: 1/2;
        grid-row: 1/2;
        padding: 2rem;
        width: 100%;
        img{
            width: 100%;
        }
    }
    .slider-content-text{
        grid-column: 2/3;
        grid-row: 1/2;

        color: #fff;
        width: 100%;
        padding: 2rem 1rem 2rem 0;
        text-wrap: wrap;
            

        h1{
            font-size: 2rem;
            margin-bottom: 1rem;
        }
        p{
            font-size: 1.1rem;
            font-weight: 200;
        }
    }

    .slider-bg{
        position:absolute;
        width: 100%;
        height: 100%;
        /* transform: scale(1.1); */
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        filter: blur(16px);
    }

    .dots {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        gap: 15px;
        z-index: 2;

        display: flex;
        align-items: center;
        justify-content: center;
        
        span{
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #fff;
            opacity: 0.75;
            transition: opacity ease 250ms;
            cursor: pointer;
        }
        span:hover{
            opacity: 1;
        }
    }
`;
