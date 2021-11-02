import React,{ useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import CountrySelected from './CountrySelected'
import { Wrapper } from './Wrapper'

const CountryPageStyled = styled.div`
  .back {
    background: var(--white);
    box-shadow: 0 0 5px rgba(0,0,0,.3);
    padding: .7em 2.2em;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 1em;
    color: var(--black);
    i {
      margin-right: 5px;
    }
  }
  @media screen and (min-width: 1024px) {
    .back {
      margin-top: 3em;
    }
  }
`


export const CountryPage = ({match, history}) => {

    let DBcountry = useSelector(state => state.CountryList.filter( pais => (
      pais.name === match.params.id
    )))
    console.log(DBcountry[0]) 
    const [country, setCountry] = useState(DBcountry[0])
    console.log(country)

    useEffect(() => {
        if (!country) {
            fetch(`https://restcountries.com/v2/name/${match.params.id.toLowerCase()}`)
              .then((response) => response.json())
              .then((data) => {
                setCountry(data[0])
              })
          }
    }, [ country, match.params.id ])
    console.log(country)

    function handleClick() {
        history.goBack()
    }

    return (
        <CountryPageStyled>
            <Wrapper>
                <button className="back" onClick={handleClick}><i className="fas fa-long-arrow-alt-left"></i> Back</button>
                <CountrySelected  {...country} />
            </Wrapper>
        </CountryPageStyled>
    )
}
