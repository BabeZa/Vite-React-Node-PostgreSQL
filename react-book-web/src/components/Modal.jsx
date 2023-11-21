import React from 'react'
import styled from "styled-components";

export default function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <Container onClick={onClose}>   
        <div onClick={(e) => {e.stopPropagation();}}>
            {children} 
        </div>
    </Container>
  )
}

const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    display: flex;
    
    align-items: center;
    justify-content: center;
    background-color: hsla(0,0%,100%,.5);
    visibility: visible;
    overflow: auto;

    @media (max-height: 600px) {
        align-items: flex-start;
    }
`;
