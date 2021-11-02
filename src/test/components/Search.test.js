import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Search from '../../components/Search'

test ('se renderiza correctamente', () => {
    
    const component = render( <Search /> )
    console.log(component)

})
