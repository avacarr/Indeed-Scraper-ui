
import React from 'react'
import styled from 'styled-components'


const SearchFilterContainer = styled.div`
    position: absolute;
    right: 2vw;
    width: 20vw;
    height: 85vh;
    margin-top: 10px;
    border: 3px solid blue;
    overflow-y: scroll;
    border-radius: 20px 0 0 20px;
    backdrop-filter: blur(0px);
`


function SearchFilter() {
    var test = localStorage.getItem('user')
    var data = localStorage.getItem('data')

    if (data) {
        var dataOut = JSON.parse(data)
    }

    const toggle = (id) => {
        var docElement = document.querySelectorAll('[list-id="' +id.i+ '"]')
        if (docElement[0].classList.contains('toggle')) {
            for(var i = 0; i < docElement.length; i++) {
                docElement[i].classList.remove('toggle')
            }
        } else {
            for(var i = 0; i < docElement.length; i++) {
                docElement[i].classList.add('toggle')
            }
        }
    }

    return (
        <SearchFilterContainer>
            
            {data ? (                 
                dataOut.map((el, i) => (
                    <div className='card' data-id={i} id={i} onClick={() => toggle({i})}>
                        <p>{el.search.search}</p>
                        <p>{el.search.location}</p>
                        <p>{el.search.postDate} Days Ago</p>
                        <p>{el.search.primaryFilter}</p>
                    </div>
                ))) : (
                <p>SearchFilter</p>
                )
            }
        </SearchFilterContainer>
    );
}

export default SearchFilter