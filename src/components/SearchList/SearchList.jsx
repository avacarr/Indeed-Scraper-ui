import React from 'react'
import styled from 'styled-components'


const SearchListContainer = styled.div`
    width: 70vw;
    height: 83vh;
    margin: 10px 0 0 20px;
    overflow-y: scroll;
    border: 3px solid blue;
    border-radius: 20px 0 0 20px;
    backdrop-filter: blur(0px);
`


function SearchList() {
    var test = localStorage.getItem('user')
    var data = localStorage.getItem('data')
    var skip
    const randomColor = () => {
        if (dataOut) {for (var i = 0; i < dataOut.length; i++) {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            let arr = document.querySelectorAll('[data-id="' +i+ '"]');
            for(let h = 0; h < arr.length; h++) {
                arr[h].style.borderColor = "#" + randomColor
            }
        }}
    }

    if (data) {
        var dataOut = JSON.parse(data) 
        
        var list = {links:[], description:[], search:[], rating:[]}
        for (var i = 0; i < dataOut.length; i++) {
            list.links.push(...dataOut[i].links)
            dataOut[i].description.forEach(el => {el.index = i})
            list.description.push(...dataOut[i].description)
            list.search.push(dataOut[i].search)
            list.rating.push(...dataOut[i].rating)
        }
        console.log("list", list);
    }
    
    window.addEventListener('load', function() {randomColor()})

    const handleChange = (e) => {
        
        //console.log("value", e.target.value)
        const group = [...document.querySelectorAll('.card.list')]
        if (!skip) {
            group.sort((a, b) => Number(a.dataset.ratesort) - Number(b.dataset.ratesort))
            if (e.target.value === 1) {group.reverse()}
            skip = true
        } else {
            group.reverse()
        }
        document.querySelector('.list-group').replaceChildren(...group)
    }
    return (
        <>
            <select className='select-list' onChange={(e) => handleChange(e)}>
                <option value='' disabled selected>Filter By:</option>
                <option value='0'>Company Rating H-L</option>
                <option value='1'>Company Rating L-H</option>
                {/* <option value=''>Pay H-L</option>
                <option value=''>Pay L-H</option> */}
            </select>
            <SearchListContainer>
                <div className='list-group'>
                    {data ? (                 
                        list.description.map((el, i) => (
                            <div className='card list' list-id={el.index} data-id={el.index} data-rateSort={list.rating[i]}>
                                <a href={list.links[i]} target="_blank">{el[0]}</a>
                                <p >{el[1]}</p>
                                <p>{el[2]}</p>
                                <p>{el[3]}</p>
                                <p>{el[4]}</p>
                                <p>{el[5]}</p>

                                <p>{el[6]}</p>
                            </div>
                        ))) : (
                        <></>
                        )
                    }
                </div>                  
            </SearchListContainer>
        </>
    );
}

export default SearchList