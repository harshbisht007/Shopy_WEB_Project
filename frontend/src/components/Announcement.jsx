import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height:30px;
    margin-top:-9px;
    background-color: teal;
    color:white; 
    display:flex;
    align-items:center; 
    justify-content:center;
    font-size:27px;
    font-weight:500px;
        
`;



function Announcement() {
  return (
    <Container>
         hiii grab this super deal 
    </Container>
  )
}

export default Announcement