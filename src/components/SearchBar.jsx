import { useState } from 'react'
import PropTypes from 'prop-types'
import SearchIcon from '../assets/SearchIcon'

export default function SearchBar ({ onSearch }) {
  const [search, setSearch] = useState('')

  const handleInputChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSearch(search)
  }

  return (
    <form onSubmit={handleSubmit} className='flex w-full h-12 items-center border-2 border-gray-300 rounded-xl overflow-hidden'>
      <input
        type='text'
        value={search}
        onChange={handleInputChange}
        placeholder='Rick Sanchez'
        className='px-2 py-1 h-full bg-inherit focus:outline-none focus:border-none flex-grow'
      />
      <button type='submit' className='h-full bg-white text-black px-3 py-1 flex items-center justify-center'>
        <SearchIcon className='w-4 h-4' />
      </button>
    </form>
  )
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired
}
