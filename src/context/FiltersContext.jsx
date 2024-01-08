import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const FiltersContext = createContext()

export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    page: 1,
    name: '',
    status: '',
    species: '',
    gender: ''
  })

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}

FiltersProvider.propTypes = {
  children: PropTypes.node.isRequired
}
