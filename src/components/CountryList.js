import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Country from './Country';
import { Wrapper } from './Wrapper'


const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  grid-auto-flow: columns;
  grid-column-gap: 75px;
  grid-template-columns: repeat(auto-fill, minMax(0, 270px));
  background: var(--background);
  justify-content: center;
  padding: 3em 0;
`

const CountryList = () => {

    const dispatch = useDispatch()
    const CountryByName = useSelector(state => state.CountryByName)

    const CountryList = useSelector( (state) => {
        
        if ( state.regionName  !== '' && CountryByName.length === 0  ) {
            return state.CountryByRegion
        } 
        if ( CountryByName.length > 0 ) {
            return CountryByName
        }
     
        return state.CountryList
       
    })

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
         .then( (response)=> {
            return response.json()
         })
         .then( (list) => {
            dispatch({
                type: 'SET_COUNTRY_LIST',
                payload: list
            })
         })
         .catch( () => {
            console.log('hubo un error')
         })
    }, [dispatch])

    
    return (
        <Wrapper>

            <CountryListStyled>
                    {
                        CountryList.map( ({name, flag, population, capital, region}) => {
                            return (
                                <Country 
                                  key={name}
                                  flag={flag}
                                  name={name}
                                  population={population}
                                  region={region}
                                  capital={capital}/>
                            )
                        })
                    }
                 
            </CountryListStyled>

        </Wrapper>
    );
}

export default CountryList