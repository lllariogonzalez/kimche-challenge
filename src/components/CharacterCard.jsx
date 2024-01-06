import PropTypes from 'prop-types'

export default function CharacterCard ({ name, image }) {
  return (
    <article className='card relative rounded-lg overflow-hidden hover:scale-105 hover:-translate-y-3 transition-all ease-in-out duration-300 cursor-pointer'>
      <img className='w-full rounded-lg' src={image} alt={name} />
      <span className='absolute text-white -translate-x-2/4 -translate-y-2/4 font-bold left-2/4 bottom-0 text-nowrap text-sm shadow-2xl'>{name}</span>
    </article>
  )
}

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}
