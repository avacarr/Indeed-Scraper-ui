
import React, { useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const NavBarContainer = styled.nav`
    margin-bottom: 0;
    h1 {
        margin-top: 0;
        height: 4vh;
    }
    img {
        right: 2vw;
        top: 1vh;
        maxHeight: 30px;
    }
    
`


function NavBar() {
    var test = localStorage.getItem('user')
    let googleLoginImgUrl = "https://onymos.com/wp-content/uploads/2020/10/google-signin-button-1024x260.png"
    let googleLogoutImgUrl = "https://i.stack.imgur.com/I3NM6.png"

    const imgStyle = {
        position: 'fixed',
        width: '10vw', 
        maxHeight: '5vh'
    }
    const HandleLogin = async () => {
        const googleLoginURL = "http://localhost:3001/auth/google/login";
        const newWindow = window.open(googleLoginURL,
            "_blank",
            "width=500,height=600"
        );
        if (newWindow) {
            let check = setInterval(() => {
                if (newWindow.closed) {
                    axios.put('http://localhost:3001/auth/login/check')
                    .then(res => {
                    console.log("login res", res.data)
                    localStorage.setItem('user', JSON.stringify(res.data))
                    clearInterval(check)
                    window.location.reload()
                    })
                }
            }, 300)
        } 
        
          

    };

    const HandleLogout = async() => {
        axios.put('http://localhost:3001/auth/google/logout')
        .then((res) => {console.log("successful logout of google")})
        let user = JSON.parse(localStorage.getItem('user'))
        localStorage.setItem('user', JSON.stringify(user))
        axios.put('http://localhost:3001/update', {user})
        .then(res => console.log("updated"))
        localStorage.setItem('user', "")
        window.location.reload()
    }
    
    return (
        <NavBarContainer>
            {test ? 
                    <h1>Welcom back {JSON.parse(test).username}</h1> : 
                    <h1>Welcome to the Indeed Scraping tool</h1>}
            {test ? 
                    <img src={googleLogoutImgUrl} style={imgStyle} onClick={HandleLogout} alt={"Logout"}/> : 
                    <img src={googleLoginImgUrl} style={imgStyle} onClick={HandleLogin} alt={"Login"}/> 
            }
        </NavBarContainer>
    );
}

export default NavBar