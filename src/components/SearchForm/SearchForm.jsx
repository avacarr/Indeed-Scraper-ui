import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'


const SearchFormContainer = styled.form`
    display: flex;
    justify-content: space-evenly;
    margin: 2vh 10px 0 10px;
    padding: 10px;
    border: 3px solid blue;
    border-radius: 10px;
    backdrop-filter: blur(0px);
    
`

function SearchForm() {
    var test = localStorage.getItem('user')
    //localStorage.removeItem('data')
    const [formData, setFormData] = useState()
    const handleChange = (e) => {setFormData({...formData, [e.target.id] : e.target.value})}
    const handleSubmit = (e) => {
        if (formData.search && formData.location) {
            e.preventDefault()
            let search = formData.search.replaceAll(" ", "+")
            if (formData.location.toLowerCase() != "remote") {
                var location = formData.location.replace(",", "%2C+")
                location = formData.location.replaceAll(" ", "+")
            } else {
                var location = formData.location
            }
            let url = "https://www.indeed.com/jobs?q="+search+"&l="+location+"&"
            if (formData.primaryFilter) {url = url + "sort=" + formData.primaryFilter +"&"}
            if (formData.postDate) {url = url + "fromage=" + formData.postDate + "&"}
            console.log(url)
            axios.put(process.env.REACT_APP_BACKEND_URL+'get', {url: url})
            .then(res => {

                let data = localStorage.getItem('data')
                if (!data) {
                    data = []
                    data[0] = res.data
                    data[0].search = formData
                    data[0].search.url = url
                    localStorage.setItem('data', JSON.stringify(data))
                } else {
                    var dataIn = JSON.parse(data)
                    dataIn.push(res.data)
                    dataIn[dataIn.length - 1].search = formData
                    dataIn[dataIn.length - 1].search.url = url
                    localStorage.setItem('data', JSON.stringify(dataIn))
                }

                if (test) {
                    let user = JSON.parse(localStorage.getItem('user'))
                    user.search_history.push({
                        search: formData.search,
                        location: formData.location,
                        primaryFilter: formData.primaryFilter,
                        postDate: formData.postDate,
                        url: url
                    })
                    localStorage.setItem('user', JSON.stringify(user))
                    axios.put(process.env.REACT_APP_BACKEND_URL+'update', {user})
                    .then(res => {
                        console.log("updated user data")
                        window.location.reload(true)
                    })
                }
            })
        } else {}
    }


    return (
        <SearchFormContainer onSubmit={handleSubmit} autocomplete='off'>
            <div>
                <label htmlFor='search'>What</label>
                <input id='search' name='search' type='text' placeholder='Title, Description, Company' onChange={handleChange} required/>
            </div>
            <div>
                <label htmlFor='location'>Where</label>
                <input id='location' name='location' type='text' placeholder='ex. Austin, TX or Remote' onChange={handleChange} required/>
            </div>
            <div>
                <label htmlFor='postDate'>Date Posted</label>
                <select id='postDate' name='postDate' onChange={handleChange}>
                    <option value='' disabled selected>Any</option>
                    <option value='1'>Last 24 Hours</option>
                    <option value='3'>Last 3 Days</option>
                    <option value='7'>Last 7 Days</option>
                    <option value='14'>Last 14 Days</option>
                </select>
            </div>
            <div>
                <label htmlFor='primaryFilter'>Primary Filter Method</label>
                <select id='primaryFilter' name='primaryFilter' onChange={handleChange}>
                    <option value='' selected>Relevance</option>
                    <option value='date'>Date</option>
                </select>
            </div>
            <input type='submit' value='Search Jobs'/>
        </SearchFormContainer>
    );
}

export default SearchForm