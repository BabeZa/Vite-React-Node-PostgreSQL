import React from 'react'
import styled from "styled-components";

import Slider1 from '../components/Items/Slider1';
import WeeklyFeatured from '../components/WeeklyFeatured';
import CompletedNovel from '../components/CompletedNovel';
import TopBooks from '../components/TopBooks';

export default function Home() {
  return (
    <Container>
      <div className="flexbox-L">
        <div className="section-header">
          <h2>Weekly Book</h2>
          {/* <hr/> */}
        </div>
        <Slider1/>

      </div>
      <div className="flexbox-L">
        <div className="section-header">
          <h2>New Book</h2>
          <hr/>
        </div>
        
      </div>
      <div className="flexbox-XL">
        <WeeklyFeatured/>


      </div>

      <div className="flexbox-XL">
        <CompletedNovel/>
      </div>

      <div className="flexbox-XL">
        <TopBooks/>
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
  row-gap: 3rem;

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
  .section-header > .flex-row{
    justify-content: space-between;
  }
  .linkto{
    font-size: 1.2rem;
    color: var(--color_Lavender_Deep);
  }
`;