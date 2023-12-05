import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const book = { 
    Id: 0, 
    Name: "The Call of Cthulhu", 
    Link: "/book/00001-The-Call-of-Cthulhu", 
    ImgURL: "https://cdn-local.mebmarket.com/meb/server1/221540/Thumbnail/book_detail_large.gif?2",
    Author: "H.P. Lovecraft",
    Rate: 1849,
    Stars: 4.7,
    Chapters: 1218,
    Views: 15390000,
    Bookmarked: 25600,
    Status: 1,
    Categories: [ "FANTASY", "ACTION", "ADVENTURE", "ROMANCE" ],
    Synopsis: "The Call of Cthulhu is a short story by American writer H. P. Lovecraft, first published in Weird Tales in 1928. It is the tale of a horrifying underwater monster coming to life and threatening mankind. The story is narrated by Francis Wayland Thurston who recounts to the reader his discovery of various notes that were left behind by his great uncle. The notes tell, among other things, of a strange cult who worship the Great Old Ones who lived long before there were any men and who were found chanting the phrase - 'In his house at R'lyeh, dead Cthulhu waits dreaming.'",

};

export default function BookView() {
    const [bookData, setBookData] = useState({
        Id: 0,
        Name: "",
        Link: "",
        ImgURL: "",
        Author: "",
        Rate: 0,
        Stars: 5,
        Chapters: 0,
        Views: 0,
        Bookmarked: 0,
        Status: 0,
        Categories: [],
        Synopsis: "",
    });

    useEffect(() => {
        setBookData(book)
    }, []);

    

    return (
        <Container>
            <header className='book-header'>
                <figure>
                    <img src={bookData.ImgURL} alt={bookData.Name} />
                </figure>
                <section>
                    <div className='book-header-item'><h1>{bookData.Name}</h1></div>
                    <div className='book-header-item book-header-author'>Author: {bookData.Author}</div>
                    <div className='book-header-item'>
                        <i className="material-icons-round star_rate">star_rate</i>
                        <i className="material-icons-round star_rate">star_rate</i>
                        <i className="material-icons-round star_rate">star_rate</i>
                        <i className="material-icons-round star_rate">star_rate</i>
                        <i className="material-icons-round star_rate-0">star_rate</i>
                        <span className='book-header-item-rate'>{bookData.Stars} ({bookData.Rate} ratings)</span>
                    </div>
                    <div className='book-header-item'>
                        <i className="material-icons-round">description</i>
                    </div>
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

            
        }
        .book-header-item{
            width: 100%;
            margin-top: 0.5rem;
        }

        .book-header-author{
            margin-top: 0.5rem;
            font-size: 1.2rem;
        }
        
        .book-header-item-rate{
            font-size: 1.3rem;
            margin-left: 0.5rem;
            line-height: 0;
        }

        .star_rate{
            color: orange;
        }
        .star_rate-0{
            color: gray;
        }
    }
`;

