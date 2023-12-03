import React from 'react'
import styled from "styled-components";


export default function BookCard({ id, name, link, imgURL, ChapterNum, Rank }) {
  return (
    <Container href={link}>
      <div className="img-card">
        <img src={imgURL} alt="" />
      </div>
      <h5>{name}</h5>
      <span className='img-card-span'><i className="material-symbols-outlined">emoji_events</i> Rank {Rank}</span>
      <span className='img-card-span'><i className="material-symbols-outlined">import_contacts</i> {ChapterNum} Chapters</span>
    </Container>

  )
}


const Container = styled.a`
    width: 9rem;
    height: 17rem;
    /* background-color: beige; */
    color: black;

    .img-card{
      width: 100%;
      height: 13rem;
      border-radius: 0.3rem;
      overflow: hidden;
      cursor: pointer;
      img{
        width: 100%;
        aspect-ratio: 9/13;
        object-fit: cover;
        object-position: 50% 50%;
        transition: transform .3s ease-out;
      }
      img:hover{
        transform: scale(1.05);
      }
    }
    .img-card-span{
        display: flex;
        font-size: 0.9rem;
        font-weight: 300;
        color: var(--color_Outer_Space);
        align-items: center;
        margin-top: 2px;
    }
    .img-card-span > i{
        font-size: 15px;
        margin-right: 5px;
    }
    h5{
      margin-bottom: 4px;
    }
`;

