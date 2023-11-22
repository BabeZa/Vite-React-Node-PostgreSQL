import React from 'react'
import styled from "styled-components";

import Slider1 from '../components/Slider1';

export default function Home() {
  return (
    <Container>
      <div class="flexbox-L">
        <div className="section-header">
          <h2>Weekly Book</h2>
          <hr/>
        </div>
        <Slider1/>

        

      </div>
      <div class="flexbox-L">
        <div className="section-header">
          <h2>New Book</h2>
          <hr/>
        </div>
        

      </div>
      <div class="flexbox-XL">
        <h2>Weekly Featured</h2>
      </div>
      <div class="flexbox-XL">
        <h2>Weekly Featured</h2>
      </div>
      <div class="flexbox-XL">
        <h2>Weekly Featured</h2>
      </div>
      
    </Container>
  )
}

const Container = styled.div`
  /* background-color: lightgray; */
  padding: 1rem;
  display: flex;
  /* box-sizing:  */
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;

  .flexbox-S{
    width: calc(25% - 1rem + (1rem/4));
  }
  .flexbox-M{
    width: calc(33.33% - 1rem + (1rem/3));
  }
  .flexbox-L{
    /* background-color: bisque; */
    width: calc(50% - 1rem + (1rem/2));
  }
  .flexbox-XL{
    width: 100%;
  }

  .section-header{
    h2{
      font-size: 1.7rem;
    }
    hr{
      border: 0;
      height: 1px;
      background: var(--color_Argent);
    }
  }
`;