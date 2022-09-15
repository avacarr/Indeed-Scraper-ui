
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import './Home.css'


const ButtonContainer = styled.div`
    border: 2px solid lightblue;
    width: 10vw;
    height: 4vh;
    margin: auto;
    margin-top: 50vh
`


const Home = () => {
  const linkStyle = { 
    textDecoration: 'none',
    color: 'lightblue'
  }
  return (
    <ButtonContainer>
      <Link to='/search' style={linkStyle}> Begin Searching </Link>
    </ButtonContainer>
  )
}

export default Home