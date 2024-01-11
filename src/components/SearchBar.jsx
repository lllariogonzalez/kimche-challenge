import { useContext } from 'react'
import SearchIcon from '@/components/Icons/SearchIcon'
import { FiltersContext } from '@/context/FiltersContext'

export default function SearchBar () {
  const { filters, setFilters } = useContext(FiltersContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    setFilters({ ...filters, page: 1, name: filters.name })
  }

  const handleInputChange = (event) => {
    const name = event.target.value
    setFilters({ ...filters, name })
  }

  return (
    <form onSubmit={handleSubmit} className='flex w-full h-12 items-center border-2 border-gray-300 hover:border-green-400 rounded-xl overflow-hidden'>
      <input
        type='text'
        value={filters.name}
        onChange={handleInputChange}
        placeholder='Rick Sanchez'
        className='px-2 py-1 h-full bg-inherit focus:outline-none focus:border-none flex-grow'
      />
      <button
        type='submit'
        className='h-full bg-white text-black px-3 py-1 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-200 ease-in-out'
        aria-label='Search characters'
      >
        <SearchIcon className='w-4 h-4' />
      </button>
    </form>
  )
}
