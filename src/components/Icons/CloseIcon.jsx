import PropTypes from 'prop-types'

export default function CloseIcon ({ className }) {
  return (
    <svg fill='none' viewBox='0 0 24 24' strokeWidth='2.5' stroke='currentColor' className={`w-6 h-6 ${className}`}>
      <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
    </svg>
  )
}

CloseIcon.propTypes = {
  className: PropTypes.string.isRequired
}
