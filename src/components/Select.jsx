import PropTypes from 'prop-types'

export default function Select ({ children, name, value, onChange }) {
  return (
    <select
      value={value}
      name={name}
      className='flex-1 w-full p-1.5 bg-zinc-800 text-white text-sm border-2 border-gray-300 rounded-lg placeholder-gray-400 focus:ring-green-400 focus:border-green-400'
      onChange={onChange}
    >
      {children}
    </select>
  )
}

Select.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}
