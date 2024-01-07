import PropTypes from 'prop-types'

export default function Error ({ children }) {
  return (
    <div className='flex min-h-screen items-start justify-center'>
      <span className='text-pink-400 text-2xl'>
        {children}
      </span>
    </div>
  )
}

Error.propTypes = {
  children: PropTypes.node.isRequired
}
