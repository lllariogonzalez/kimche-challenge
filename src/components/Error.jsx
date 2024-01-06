import PropTypes from 'prop-types'

export default function Error ({ children }) {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <span className='text-red-500 text-2xl'>
        {children}
      </span>
    </div>
  )
}

Error.propTypes = {
  children: PropTypes.node.isRequired
}
