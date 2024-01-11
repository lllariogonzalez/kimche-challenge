import { useContext } from 'react'
import PropTypes from 'prop-types'
import { FiltersContext } from '../context/FiltersContext'

export default function Pagination ({ info }) {
  const { filters, setFilters } = useContext(FiltersContext)

  const { count, pages, prev, next } = info

  const handlePage = (page) => {
    setFilters({ ...filters, page })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <div className='flex gap-4 justify-center items-center'>

        {prev !== null &&
          <button
            className='bg-white text-black font-bold rounded px-3 cursor-pointer hover:bg-green-600 hover:text-white transition-all duration-200 ease-in-out'
            onClick={() => handlePage(prev)}
            disabled={prev === null}
          >Prev
          </button>}

        <span className='font-bold'>Page {filters.page} / {pages}</span>

        {next !== null &&
          <button
            className='bg-white text-black font-bold rounded px-3 cursor-pointer hover:bg-green-600 hover:text-white transition-all duration-200 ease-in-out'
            onClick={() => handlePage(next)}
            disabled={next === null}
          >Next
          </button>}

      </div>

      <p className=''>{count} characters</p>
    </>
  )
}

Pagination.propTypes = {
  info: PropTypes.object.isRequired
}
