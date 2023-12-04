import React from 'react'
import styled from "styled-components";

import BookItem from './Items/BookItem';

const BooksMostRead = [
    { id: 0, name: "The Call of Cthulhu", link: "/book/00001-The-Call-of-Cthulhu", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221540/Thumbnail/book_detail_large.gif?2", Data1: {key : "views", value: 1}, Data2 : {key : "bookmark", value: 1} },
    { id: 1, name: "The Colour out of Space", link: "/book/00002-The Colour out of Space", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221543/Thumbnail/book_detail_large.gif?2", Data1: {key : "views", value: 12}, Data2 : {key : "bookmark", value: 11} },
    { id: 2, name: "At the Mountain of Madness ", link: "/book/00003-At the Mountain of Madness", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221551/Thumbnail/book_detail_large.gif?2", Data1: {key : "views", value: 137}, Data2 : {key : "bookmark", value: 152} },
    { id: 3, name: "The Call of Cthulhu", link: "/book/00001-The-Call-of-Cthulhu", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221540/Thumbnail/book_detail_large.gif?2", Data1: {key : "views", value: 1486}, Data2 : {key : "bookmark", value: 1924} },
    { id: 4, name: "The Colour out of Space", link: "/book/00002-The Colour out of Space", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221543/Thumbnail/book_detail_large.gif?2", Data1: {key : "views", value: 13154}, Data2 : {key : "bookmark", value: 17562} },
    { id: 5, name: "At the Mountain of Madness", link: "/book/00003-At the Mountain of Madness", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221551/Thumbnail/book_detail_large.gif?2", Data1: {key : "views", value: 187244}, Data2 : {key : "bookmark", value: 178628} },
    { id: 6, name: "The Call of Cthulhu", link: "/book/00001-The-Call-of-Cthulhu", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221540/Thumbnail/book_detail_large.gif?2", Data1: {key : "views", value: 1832746}, Data2 : {key : "bookmark", value: 1418623} },
    { id: 7, name: "The Colour out of Space", link: "/book/00002-The Colour out of Space", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221543/Thumbnail/book_detail_large.gif?2", Data1: {key : "views", value: 14237892}, Data2 : {key : "bookmark", value: 11573485} },
    { id: 8, name: "At the Mountain of Madness ", link: "/book/00003-At the Mountain of Madness", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221551/Thumbnail/book_detail_large.gif?2", Data1: {key : "views", value: 119526589}, Data2 : {key : "bookmark", value: 146348772} },
    { id: 9, name: "The Call of Cthulhu", link: "/book/00001-The-Call-of-Cthulhu", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221540/Thumbnail/book_detail_large.gif?2", Data1: {key : "views", value: 1462324875}, Data2 : {key : "bookmark", value: 187498554} },

];

const BooksNewTrends = [
  { id: 0, name: "The Call of Cthulhu", link: "/book/00001-The-Call-of-Cthulhu", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221540/Thumbnail/book_detail_large.gif?2", Data1: {key : "comment", value: 1}, Data2 : {key : "review", value: 1} },
  { id: 1, name: "The Colour out of Space", link: "/book/00002-The Colour out of Space", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221543/Thumbnail/book_detail_large.gif?2", Data1: {key : "comment", value: 10}, Data2 : {key : "review", value: 10} },
  { id: 2, name: "At the Mountain of Madness ", link: "/book/00003-At the Mountain of Madness", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221551/Thumbnail/book_detail_large.gif?2", Data1: {key : "comment", value: 100}, Data2 : {key : "review", value: 100} },
  { id: 3, name: "The Call of Cthulhu", link: "/book/00001-The-Call-of-Cthulhu", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221540/Thumbnail/book_detail_large.gif?2", Data1: {key : "comment", value: 1000}, Data2 : {key : "review", value: 1000} },
  { id: 4, name: "The Colour out of Space", link: "/book/00002-The Colour out of Space", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221543/Thumbnail/book_detail_large.gif?2", Data1: {key : "comment", value: 10000}, Data2 : {key : "review", value: 10000} },
  { id: 5, name: "At the Mountain of Madness", link: "/book/00003-At the Mountain of Madness", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221551/Thumbnail/book_detail_large.gif?2", Data1: {key : "comment", value: 100000}, Data2 : {key : "review", value: 100000} },
  { id: 6, name: "The Call of Cthulhu", link: "/book/00001-The-Call-of-Cthulhu", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221540/Thumbnail/book_detail_large.gif?2", Data1: {key : "comment", value: 1000000}, Data2 : {key : "review", value: 1000000} },
  { id: 7, name: "The Colour out of Space", link: "/book/00002-The Colour out of Space", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221543/Thumbnail/book_detail_large.gif?2", Data1: {key : "comment", value: 10000000}, Data2 : {key : "review", value: 10000000} },
  { id: 8, name: "At the Mountain of Madness ", link: "/book/00003-At the Mountain of Madness", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221551/Thumbnail/book_detail_large.gif?2", Data1: {key : "comment", value: 100000000}, Data2 : {key : "review", value: 100000000} },
  { id: 9, name: "The Call of Cthulhu", link: "/book/00001-The-Call-of-Cthulhu", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221540/Thumbnail/book_detail_large.gif?2", Data1: {key : "comment", value: 1000000000}, Data2 : {key : "review", value: 1000000000} },
];

const BooksRating = [
  { id: 0, name: "The Call of Cthulhu The Call of Cthulhu", link: "/book/00001-The-Call-of-Cthulhu", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221540/Thumbnail/book_detail_large.gif?2", Data1: {key : "rating", value: 0}, Data2 : {key : "rate", value: 1} },
  { id: 1, name: "The Colour out of Space", link: "/book/00002-The Colour out of Space", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221543/Thumbnail/book_detail_large.gif?2", Data1: {key : "rating", value: 0.5}, Data2 : {key : "rate", value: 10} },
  { id: 2, name: "At the Mountain of Madness ", link: "/book/00003-At the Mountain of Madness", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221551/Thumbnail/book_detail_large.gif?2", Data1: {key : "rating", value: 1}, Data2 : {key : "rate", value: 100} },
  { id: 3, name: "The Call of Cthulhu", link: "/book/00001-The-Call-of-Cthulhu", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221540/Thumbnail/book_detail_large.gif?2", Data1: {key : "rating", value: 2}, Data2 : {key : "rate", value: 1000} },
  { id: 4, name: "The Colour out of Space", link: "/book/00002-The Colour out of Space", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221543/Thumbnail/book_detail_large.gif?2", Data1: {key : "rating", value: 3}, Data2 : {key : "rate", value: 10000} },
  { id: 5, name: "At the Mountain of Madness", link: "/book/00003-At the Mountain of Madness", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221551/Thumbnail/book_detail_large.gif?2", Data1: {key : "rating", value: 4}, Data2 : {key : "rate", value: 100000} },
  { id: 6, name: "The Call of Cthulhu", link: "/book/00001-The-Call-of-Cthulhu", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221540/Thumbnail/book_detail_large.gif?2", Data1: {key : "rating", value: 5}, Data2 : {key : "rate", value: 1000000} },
  { id: 7, name: "The Colour out of Space", link: "/book/00002-The Colour out of Space", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221543/Thumbnail/book_detail_large.gif?2", Data1: {key : "rating", value: 4.5}, Data2 : {key : "rate", value: 10000000} },
  { id: 8, name: "At the Mountain of Madness ", link: "/book/00003-At the Mountain of Madness", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221551/Thumbnail/book_detail_large.gif?2", Data1: {key : "rating", value: 4.9}, Data2 : {key : "rate", value: 100000000} },
  { id: 9, name: "The Call of Cthulhu", link: "/book/00001-The-Call-of-Cthulhu", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221540/Thumbnail/book_detail_large.gif?2", Data1: {key : "rating", value: 4.1}, Data2 : {key : "rate", value: 1000000000} },
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
            <div className="TopBooks-header">
              <h3>Most Read</h3>
            </div>
            <div>
              {BooksMostRead.map(({ id, name, link, imgURL, Data1, Data2}) => {return(
                  <BookItem 
                    key={id} 
                    name={name} 
                    link={link} 
                    imgURL={imgURL} 
                    Data1={Data1} 
                    Data2={Data2}/>
              )})}
            </div>
          </div>
          <div className='TopBooks-item'>
            <div className="TopBooks-header">
              <h3>New Trends</h3>
            </div>
            <div>
              {BooksNewTrends.map(({ id, name, link, imgURL, Data1, Data2}) => {return(
                  <BookItem 
                  key={id} 
                  name={name} 
                  link={link} 
                  imgURL={imgURL} 
                  Data1={Data1} 
                  Data2={Data2}/>
            )})}
            </div>
          </div>
          <div className='TopBooks-item'>
            <div className="TopBooks-header">
              <h3>Rating</h3>
            </div>
            <div>
              {BooksRating.map(({ id, name, link, imgURL, Data1, Data2}) => {return(
                  <BookItem 
                  key={id} 
                  name={name} 
                  link={link} 
                  imgURL={imgURL} 
                  Data1={Data1} 
                  Data2={Data2}/>
            )})}
            </div>
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
    height: 53rem;
    /* background-color: beige; */
  }

  .TopBooks-header{
    background-color: var(--color_Lavender_Light);
    padding: 0.5rem;
    width: 10rem;
    margin-bottom: 1rem;

    h3{
      color: white;
    }
  }

`;

