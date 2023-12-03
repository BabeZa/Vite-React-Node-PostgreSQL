import React from 'react'
import styled from "styled-components";

import BookCard from './Items/BookCard'

const BooksMostRead = [
    { id: 0, name: "The Call of Cthulhu", link: "/book/00001-The-Call-of-Cthulhu", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221540/Thumbnail/book_detail_large.gif?2", ChapterNum: 3, Rank: 1 },
    { id: 1, name: "The Colour out of Space", link: "/book/00002-The Colour out of Space", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221543/Thumbnail/book_detail_large.gif?2", ChapterNum: 100, Rank: 99 },
    { id: 2, name: "At the Mountain of Madness", link: "/book/00003-At the Mountain of Madness", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221551/Thumbnail/book_detail_large.gif?2", ChapterNum: 1000, Rank: 101 },
];

export default function TopBooks() {
  return (
    <Container>
        <div className="section-header">
          <div className="flex-row">
            <h2>Top Books</h2>
            <a className='linkto' href="">View More</a>
          </div>
          <hr/>
        </div>
        <div className='container-TopBooks'>
          <div className='TopBooks-item'>
            
          </div>
          <div className='TopBooks-item'>
2
          </div>
          <div className='TopBooks-item'>
3
          </div>


        </div>
    </Container>
  )
}

const Container = styled.div`

  .container-TopBooks{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }

  .TopBooks-item{
    height: 40rem;
    background-color: beige;
  }

`;

