import React from 'react'
import styled from "styled-components";


export default function BookItem({ key, name, link, imgURL, Data1, Data2 }) {

  function formatCash(n) {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
  }

  function handleData(Data){
    if(Data.key == "rank"){
      return <><i className="material-symbols-rounded">emoji_events</i> Rank {Data.value} </>
    }else if(Data.key == "chapters"){
      return <><i className="material-symbols-rounded">import_contacts</i> {Data.value} Chapters</>
    }else if(Data.key == "views"){
      return <><i className="material-symbols-rounded">visibility</i> {formatCash(Data.value)} (Monthly)</>
    }else if(Data.key == "bookmark"){
      return <><i className="material-symbols-rounded">bookmark</i> {formatCash(Data.value)}</>
    }else if(Data.key == "comment"){
      return <><i className="material-symbols-rounded">comment</i> {Data.value} Comments</>
    }else if(Data.key == "review"){
      return <><i className="material-symbols-rounded">reviews</i> {Data.value} Reviewss</>
    }else if(Data.key == "rating"){
      return <><i className="material-symbols-rounded">star_rate</i> {Data.value} </>
    }else if(Data.key == "rate"){
      return <><i className="material-symbols-rounded">rate_review</i> {Data.value} Rating</>
    }else{
      return <></>
    }
    
  }

  return (
    <Container href={link} key={key}>
      <div className="img-card">
        <img src={imgURL} alt={name} />
      </div>
      <div className='content'>
        <div className='img-card-name'>{name}</div>
        <span className='img-card-span'>{handleData(Data1)}</span>
        <span className='img-card-span'>{handleData(Data2)}</span>
      </div>
      
    </Container>

  )
}


const Container = styled.a`
    width: 100%;
    height: 4rem;
    /* background-color: beige; */
    color: black;
    margin-bottom: 1rem;
    display: flex;

    .material-symbols-outlined {
      font-variation-settings:
      'FILL' 1
    }

    .img-card{
      width: 3rem;
      height: 4rem;
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

    .content{
      width: 100%;
      margin-left: 0.5rem;
    }
    .img-card-span{
        display: flex;
        font-size: 0.9rem;
        font-weight: 300;
        color: var(--color_Outer_Space);
        align-items: center;
        margin-top: 0.5rem;
    }
    .img-card-span > i{
        font-size: 15px;
        margin-right: 2px;
    }
    .img-card-span > i:last-child{
        margin-right: 6px;
    }
    .img-card-name{
      width: 16rem;
      /* background-color: bisque; */
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
`;

