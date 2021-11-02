import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const RegionStyled = styled.select`
  padding: 1.3em;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 9px 0 rgba(0,0,0,.05);
  outline: 0;
  background: var(--white);
  color: var(--black);
`
 
export const Region = () => {

    const dispatch = useDispatch()

    const handleSelect = (e) => {

        const region = e.target.value
        dispatch({
            type: 'SET_COUNTRY_REGION',
            payload: region
        })

    }

    return (

            <RegionStyled name='selectCountry' onChange={ (e) => handleSelect(e) }>
               <option value='Asia'>Asia</option>
               <option value='Americas'>America</option>
               <option value='Europe'>Europa</option>
               <option value='Africa'>Africa</option>
               <option value='Oceania'>Oceania</option>
            </RegionStyled>

    )
}
