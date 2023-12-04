import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const book = { 
    id: 0, 
    name: "The Call of Cthulhu", 
    link: "/book/00001-The-Call-of-Cthulhu", 
    imgURL: "https://cdn-local.mebmarket.com/meb/server1/221540/Thumbnail/book_detail_large.gif?2",
    author: "H.P. Lovecraft",
};

export default function BookView() {
    const [bookData, setBookData] = useState({
        id: 0,
        name: "",
        link: "",
        imgURL: "",
        author: "",
    });

    useEffect(() => {
        setBookData(book)
    }, []);

    return (
        <Container>
            <header className='book-header'>
                <figure>
                    <img src={bookData.imgURL} alt={bookData.name} />
                </figure>
                <section>
                    <h1>{bookData.name}</h1>
                    <span className='book-header-author'>Author: {bookData.author}</span>
                    <span>Author: </span>
                    <span>Author: </span>
                </section>
            </header>
        </Container>
    )
}

const Container = styled.div`

    .book-header{
        width: 100%;
        height: 30rem;
        background-color: cadetblue;
        padding-top: 2rem;
        display: flex;
        flex-direction: row;

        figure{
            width: fit-content;
            height: 28rem;
            border-radius: 12px;
            overflow: hidden;
            /* aspect-ratio: 9/13; */

            img{
                height: 100%;
            }
        }

        section{
            margin-left: 1.5rem;

            h1{
                font-size: 2.5rem;
                font-weight: 700;
            }

            span{
                display: block;
            }
        }

        .book-header-author{
            margin-top: 0.5rem;
            font-size: 1.3rem;
        }
    }
`;

