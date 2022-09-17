
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const ButtonContainer = styled.div`
    poisiton: relative;
    border: 2px solid black;
    width: 100px;
    height: 6vh;
    margin: 50vh 0 39vh 45vw;
    backdrop-filter: blur(0px);
    text-align: center;
`


const Home = () => {
  const linkStyle = { 
    textDecoration: 'none',
    color: 'black',
  }
  return (
    <ButtonContainer>
      <Link to='/search' style={linkStyle}> Begin Searching </Link>
    </ButtonContainer>
  )
}

export default Home