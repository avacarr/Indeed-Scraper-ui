
import React from 'react'
import { SearchFilter, SearchForm, SearchList } from '../../components/index';
import './Search.css'


const Search = () => {
  return (
    <div>
      <SearchForm />
      <SearchFilter />
      <SearchList />
    </div>
  )
}

export default Search