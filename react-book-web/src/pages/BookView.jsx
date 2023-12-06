import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const book = { 
    Id: 0, 
    Name: "The Call of Cthulhu", 
    Link: "/book/00001-The-Call-of-Cthulhu", 
    ImgURL: "https://cdn-local.mebmarket.com/meb/server1/221540/Thumbnail/book_detail_large.gif?2",
    Author: "H.P. Lovecraft",
    Rank: 1,
    Rate: 1849,
    Stars: 4.7,
    Chapters: 1218,
    Views: 15390000,
    Bookmarked: 25600,
    Status: 1,
    Categories: [ "FANTASY", "ACTION", "ADVENTURE", "ROMANCE" ],
    Tags: [ "FANTASY", "ACTION", "ADVENTURE", "ROMANCE" ],
    Synopsis: "The Call of Cthulhu is a short story by American writer H. P. Lovecraft, first published in Weird Tales in 1928. It is the tale of a horrifying underwater monster coming to life and threatening mankind. The story is narrated by Francis Wayland Thurston who recounts to the reader his discovery of various notes that were left behind by his great uncle. The notes tell, among other things, of a strange cult who worship the Great Old Ones who lived long before there were any men and who were found chanting the phrase - 'In his house at R'lyeh, dead Cthulhu waits dreaming.'",

};

export default function BookView() {
    const [bookData, setBookData] = useState({
        Id: 0,
        Name: "",
        Link: "",
        ImgURL: "",
        Author: "",
        Rank: 0,
        Rate: 0,
        Stars: 5,
        Chapters: 0,
        Views: 0,
        Bookmarked: 0,
        Status: 0,
        Categories: [],
        Tags: [],
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
                    <div className='book-header-item book-header-rank'><i className="material-icons-round">emoji_events</i><h3>RANK {bookData.Rank}</h3></div>
                    <div className='book-header-item'>
                        <span className='book-header-rating'>
                            <i className="material-icons-round star_rate">star_rate</i>
                            <i className="material-icons-round star_rate">star_rate</i>
                            <i className="material-icons-round star_rate">star_rate</i>
                            <i className="material-icons-round star_rate">star_rate</i>
                            <i className="material-icons-round star_rate-0">star_rate</i>
                        </span>
                        <strong className='book-header-rating'>{bookData.Stars}</strong> 
                        <small className='book-header-rating'>({bookData.Rate} ratings)</small>
                    </div>
                    <div className='book-header-item'>
                        <div className='book-header-stats'>
                            <span><i className="material-icons-round">description</i></span>
                            <small>{bookData.Chapters} Chapters</small>
                        </div>
                        <div className='book-header-stats'>
                            <span><i className="material-icons-round">visibility</i></span>
                            <small>{bookData.Views} Views</small>
                        </div>
                        <div className='book-header-stats'>
                            <span><i className="material-icons-round">bookmark</i></span>
                            <small>{bookData.Bookmarked} Bookmarked</small>
                        </div>
                        
                    </div>
                    <div className='book-header-item'>
                        <label>Categories</label>
                        <div>

                        </div>

                    </div>
                </section>
            </header>
            <article className='book-content'>
                <div className='book-content-item'>
                    <h2>Synopsis</h2>
                    <p>{bookData.Synopsis}</p>

                </div>
                <div className='book-content-item'>
                    <h2>Tags</h2>
                    <div></div>

                </div>
                <div className='book-content-item'>
                    <h2>You May Also Like</h2>
                    <div></div>

                </div>
            </article>
        </Container>
    )
}

const Container = styled.div`

    .book-header{
        width: 100%;
        height: 30rem;
        /* background-color: cadetblue; */
        padding: 2rem 1rem 0rem 1rem;
        display: flex;
        flex-direction: row;

        figure{
            width: fit-content;
            height: 28rem;
            border-radius: 8px;
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
            display: flex;
            flex-direction: row;
        }

        .book-header-author{
            margin-top: 0.5rem;
            font-size: 1.2rem;
            font-weight: 300;
        }
        
        .book-header-rank{
            font-weight: 700;
            color: orange;
            margin-top: 1rem;
            h3{
                margin-left:0.3rem;
            }
        }
        
        .book-header-rating{
            vertical-align: middle;
        }
        strong.book-header-rating{
            margin-left: 0.5rem;
            font-size: 1.5rem;
            font-weight: 300;
        }
        small.book-header-rating{
            margin-left: 0.3rem;
            font-size: 1.1rem;
            font-weight: 300;
        }

        .book-header-stats{
            width: fit-content;
            display: inline;
            margin-right: 1rem;
            display: flex;
            align-items: center;
        }
        .book-header-stats > small{
            margin-left: 0.3rem;
            font-size: 1rem;
            font-weight: 300;
        }
        /* .book-header-stats:not(:last-child) {
            border-right: 1px solid #c1c3c5;
        } */

        .star_rate{
            color: yellow;
        }
        .star_rate-0{
            color: gray;
        }
    }

    .book-content{
        background-color: white;
        padding: 1rem;

        .book-content-item{
            margin-top: 1.5rem;

            h2{
                display: flex;
                flex-direction: row;
                margin-bottom: 1rem;
            }

            h2:after {
                content: "";
                margin: auto;
                flex: 1 1;
                border-bottom: 1px solid grey;
                margin-left: 10px;
            }
        }
    }
`;

