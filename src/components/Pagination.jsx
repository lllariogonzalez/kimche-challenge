import { useContext } from 'react'
import PropTypes from 'prop-types'
import { FiltersContext } from '../context/FiltersContext'
import NextIcon from './Icons/NextIcon'
import PrevIcon from './Icons/PrevIcon'

export default function Pagination ({ info }) {
  const { filters, setFilters } = useContext(FiltersContext)

  const { count, pages, prev, next } = info

  const handlePage = (page) => {
    setFilters({ ...filters, page })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <div className='flex gap-1 justify-center items-center'>

        <button
          className={`${prev ? '' : 'invisible'} cursor-pointer hover:-translate-x-1 p-2 hover:text-white transition-all duration-200 ease-in-out`}
          onClick={() => handlePage(prev)}
          disabled={prev === null}
          aria-label='Prev page'
        >
          <PrevIcon />
        </button>

        <div>
          <span className='font-bold'>Page {filters.page} / {pages}</span>
          <p className='text-xs border-t border-white text-center'>{count} characters</p>
        </div>

        <button
          className={`${next ? '' : 'invisible'} cursor-pointer hover:translate-x-1 p-2 hover:text-white transition-all duration-200 ease-in-out`}
          onClick={() => handlePage(next)}
          disabled={next === null}
          aria-label='Next page'
        >
          <NextIcon />
        </button>

      </div>
    </>
  )
}

Pagination.propTypes = {
  info: PropTypes.object.isRequired
}
