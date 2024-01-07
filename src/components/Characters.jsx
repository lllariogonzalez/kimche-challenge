import PropTypes from 'prop-types'
import CharacterCard from './CharacterCard'
import Error from './Error'

export default function Characters ({ characters }) {
  return (
    <>
      {characters?.length > 0
        ? (
          <section className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {characters.map(character => <CharacterCard key={character.id} name={character.name} image={character.image} />)}
          </section>
          )
        : <Error>Character not found</Error>}
    </>
  )
}

Characters.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  )
}
