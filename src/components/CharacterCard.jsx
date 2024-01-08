import PropTypes from 'prop-types'
import CharacterDetails from './CharacterDetails'
import { useState } from 'react'
import Modal from './Modal'

export default function CharacterCard ({ id, name, image }) {
  const [showDetails, setShowDetails] = useState(false)

  const handleShowDetails = () => {
    setShowDetails(!showDetails)
  }

  return (
    <>
      <article onClick={handleShowDetails} className='card relative rounded-xl overflow-hidden hover:scale-105 hover:-translate-y-3 transition-all ease-in-out duration-300 cursor-pointer'>
        <img className='rounded-lg' width={300} height={300} src={image} alt={name} />
        <span className='absolute text-white -translate-x-2/4 font-bold left-2/4 bottom-1 text-center text-pretty text-xs md:text-sm shadow-2xl'>{name}</span>
      </article>
      {showDetails &&
        <Modal onClick={handleShowDetails}>
          <CharacterDetails id={id} onClick={handleShowDetails} />
        </Modal>}
    </>
  )
}

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}
