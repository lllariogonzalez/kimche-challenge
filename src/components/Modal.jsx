import PropTypes from 'prop-types'

export default function Modal ({ children, onClick }) {
  return (
    <div onClick={onClick} className='fixed top-0 left-0 flex justify-center items-center w-screen h-screen bg-black bg-opacity-50 tras z-10'>
      {children}
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}
