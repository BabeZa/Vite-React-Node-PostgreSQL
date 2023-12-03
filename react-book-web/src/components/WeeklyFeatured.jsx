import React from 'react'
import BookCard from './Items/BookCard'


const Books = [
    { id: 0, name: "The Call of Cthulhu", link: "/book/00001-The-Call-of-Cthulhu", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221540/Thumbnail/book_detail_large.gif?2", ChapterNum: 3, Rank: 1 },
    { id: 1, name: "The Colour out of Space", link: "/book/00002-The Colour out of Space", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221543/Thumbnail/book_detail_large.gif?2", ChapterNum: 100, Rank: 99 },
    { id: 2, name: "At the Mountain of Madness", link: "/book/00003-At the Mountain of Madness", imgURL: "https://cdn-local.mebmarket.com/meb/server1/221551/Thumbnail/book_detail_large.gif?2", ChapterNum: 1000, Rank: 101 },
];

export default function WeeklyFeatured() {
  return (
    <>
        <div className="section-header">
          <div className="flex-row">
            <h2>Weekly Featured</h2>
            <a className='linkto' href="">View More</a>
          </div>
          <hr/>
        </div>
        <div className='flex-row flex-row-gap'>
            {Books.map(({ id, name, link, imgURL, ChapterNum, Rank }) => {return(
                <BookCard id={id} name={name} link={link} imgURL={imgURL} ChapterNum={ChapterNum} Rank={Rank}/>
            )})}
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />


        </div>
    </>
  )
}
