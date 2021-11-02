import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { Input } from './Input'

const SearchStyled = styled.div`
  display: flex;
  position: relative;
  .fa-times {
    position: absolute;
    right: 1em;
    top: 1em;
  }
`


const Search = () => {

  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    const pais = e.target.value
    setInputValue( pais )
    
    dispatch({
        type: 'SET_COUNTRY_NAME',
        payload: pais
    })
  }

  const clearInput = () => {
    dispatch({
      type: 'SET_COUNTRY_NAME',
      payload: ''
    })
    setInputValue('')
  }

 
  return (
      <SearchStyled>

        <Input 
          placeholder='Search for a country...'
          value={inputValue}
          onChange={ handleInputChange } />

        {
          inputValue &&
           <i className="fas fa-times" onClick={ clearInput }></i>
        }  

      </SearchStyled>
  )
}

export default Search