import { useCharacters } from '@/characters/custom-hooks'
import CharacterCard from './CharacterCard'
import Loader from './Loader'
import Error from './Error'

export default function Characters () {
  const { characters, error, loading } = useCharacters()

  return (
    <>
      {loading && <Loader />}
      {error && <Error>{error.message}</Error>}
      {characters && characters.length > 0
        ? (
          <section className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {characters.map(character => <CharacterCard key={character.id} name={character.name} image={character.image} />)}
          </section>
          )
        : characters?.length === 0 && <Error>Character not found</Error>}
    </>
  )
}
