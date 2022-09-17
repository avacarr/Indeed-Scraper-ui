
import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Star from '../../assets/star.png'
import Unstar from '../../assets/unstar.png'

const FavoritesForm = (props) => {
    var test = localStorage.getItem('user')
    if (test) { var user = JSON.parse(test)}
    if (user && user.saved.includes(props.site)) {
        var StarURL = Star
      } else {
        StarURL = Unstar
      }
    
    const handleClick = (url, e) => {
        if(e && e.stopPropagation) e.stopPropagation();
        console.log("clicked fav ", url)
        if (user.saved.indexOf(url)) {
            console.log("doesn't contain")
            user.saved.push(url)
            localStorage.setItem('user', JSON.stringify(user))
        } else {
            console.log("contains")
            user.saved.splice(user.saved.indexOf(url), 1)
            localStorage.setItem('user', JSON.stringify(user))
        }
        axios.put(process.env.REACT_APP_BACKEND_URL+'update', {user})
        .then(res => {
            console.log("updated user data")
            window.location.reload()
        })
        
    }

    const imageStyle = {
        position: 'absolute',
        width: '20px',
        height: '20px',
        bottom: '0',
        right: '0'
        
    }
  return (
    <div>
        {test !== "" ? <img src={StarURL} onClick={(e) => handleClick(props.site, e)} style={imageStyle}/> : <img style={{height: '0'}}/> }
    </div>
  )
}

export default FavoritesForm