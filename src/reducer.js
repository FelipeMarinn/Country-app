
const initialState = {
  CountryList: [],
  CountryByName: [],
  CountryByRegion: [],
  // CountryPage: [],
  regionName: ''
}

function reducer( state = initialState, action ) {
  
    switch (action.type) {
  
      case 'SET_COUNTRY_LIST':
        return {
          ...state,
          CountryList: action.payload
        }
  
      case 'SET_COUNTRY_NAME':
        let list
        if ( state.regionName !== '' ) {
          list = state.CountryByRegion
        } else {
          list = state.CountryList
        }
        return {
          ...state,
          CountryByName: list.filter( (country => {
            return country.name.toLowerCase().startsWith( action.payload.toLowerCase() )
          }))
        }  
       
      case 'SET_COUNTRY_REGION':
        return {
          ...state,
          CountryByName: [],
          regionName: action.payload,
          CountryByRegion: state.CountryList.filter( (country => {
            return country.region === action.payload
          }))
        } 
        
      default:
        return state   
    }
  
  }

export default reducer  