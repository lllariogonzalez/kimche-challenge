import Select from './Select'
import { useContext } from 'react'
import { FiltersContext } from '@/context/FiltersContext'
import { genderList, speciesList, statusList } from '@/characters/filters-options'

export default function Filters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const handleSelectFilters = (event) => {
    const { name, value } = event.target
    setFilters({ ...filters, [name]: value, page: 1 })
  }

  const handleReset = () => {
    setFilters({
      page: 1,
      name: '',
      status: '',
      species: '',
      gender: ''
    })
  }

  return (
    <div className='flex flex-col md:flex-row w-full text-white gap-4'>

      <Select value={filters.status} name='status' onChange={handleSelectFilters}>
        <option value=''>Status...</option>
        {statusList.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>

      <Select value={filters.species} name='species' onChange={handleSelectFilters}>
        <option value=''>Species...</option>
        {speciesList.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>

      <Select value={filters.gender} name='gender' onChange={handleSelectFilters}>
        <option value=''>Genders...</option>
        {genderList.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>

      <button
        onClick={handleReset}
        className='font-bold w-full md:w-fit text-nowrap bg-white rounded-lg px-4 py-1 text-black hover:bg-sky-500 hover:text-white transition-all duration-200 ease-in-out'
        aria-label='Reset filters'
      >
        Reset filters
      </button>

    </div>
  )
}
