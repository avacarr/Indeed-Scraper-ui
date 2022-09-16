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
    
    const randomColor = (id) => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        let arr = document.querySelectorAll('[data-id="' +id+ '"]');
        console.log('arr', arr)
        for(let i = 0; i < arr.length; i++) {
            arr[i].style.borderColor = "#" + randomColor
        }
    } 

    if (data) {
        var dataOut = JSON.parse(data)

        var list = {links:[], description:[], search:[]}
        for (var i = 0; i < dataOut.length; i++) {
            list.links.push(...dataOut[i].links)
            dataOut[i].description.forEach(el => {el.index = i})
            list.description.push(...dataOut[i].description)
            list.search.push(dataOut[i].search)
            randomColor(i)
        }
        console.log(list);
        //console.log("dataOut", dataOut)
    }

    const handleChange = () => {}
    return (
        <>
            <select className='select-list' onChange={handleChange}>
                <option value='' disabled selected>Filter By:</option>
                <option value=''>Company Rating H-L</option>
                <option value=''>Company Rating L-H</option>
                <option value=''>Pay H-L</option>
                <option value=''>Pay L-H</option>
            </select>
            <SearchListContainer>
                {data ? (                 
                    list.description.map((el, i) => (
                        <div className='card list' list-id={el.index} data-id={el.index}>
                            <p>{el[0]}</p>
                            <p>{el[1]}</p>
                            <p>{el[2]}</p>
                            <p>{el[3]}</p>
                            <p>{el[4]}</p>
                            <p>{el[5]}</p>
                            <p>{el[6]}</p>
                        </div>
                    ))) : (
                    <p>SearchList</p>
                    )
                }
                    
            </SearchListContainer>
        </>
    );
}

export default SearchList