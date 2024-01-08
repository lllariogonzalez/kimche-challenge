import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useCharacter } from '../characters/custom-hooks'
import Loader from './Loader'
import Error from './Error'
import CloseIcon from '../assets/CloseIcon'

export default function CharacterDetails ({ id, onClick }) {
  const [getCharacter, { character, error, loading }] = useCharacter()

  const handleClick = (event) => {
    event.stopPropagation()
  }

  useEffect(() => {
    getCharacter({ variables: { id } })
  }, [getCharacter, id])

  return (
    <>
      {loading && <Loader />}
      {error && <Error>{error.message}</Error>}
      {character &&
        <div className='relative'>
          <CloseIcon
            onClick={onClick}
            className='absolute bg-white rounded-full text-zinc-800 top-7 right-7 md:right-5 md:top-5 p-1 w-7 h-7 cursor-pointer logo hover:scale-105 transition-transform ease-in-out z-20'
          />
          <div onClick={handleClick} className='flex flex-col justify-center items-center md:flex-row m-5 md:m-0 bg-black rounded-xl overflow-hidden'>
            <img className='rounded-xl' width={300} height={300} src={character.image} alt={character.name} />
            <div className='flex flex-col gap-4 py-5 px-2 w-[300px] md:w-fit md:px-20 text-center'>
              <h1 className='font-bold text-3xl'>{character.name}</h1>
              <div className='text-pretty text-base'>
                <p><strong className='font-bold text-lg md:text-xl text-sky-300'>Status: </strong>{character.status}</p>
                <p><strong className='font-bold text-lg md:text-xl text-sky-300'>Gender: </strong>{character.gender}</p>
                <p><strong className='font-bold text-lg md:text-xl text-sky-300'>Species: </strong>{character.species}</p>
                <p><strong className='font-bold text-lg md:text-xl text-sky-300'>Type: </strong>{character.type}</p>
                <p><strong className='font-bold text-lg md:text-xl text-sky-300'>Location: </strong>{character.location.name}</p>
                <p><strong className='font-bold text-lg md:text-xl text-sky-300'>Origin: </strong>{character.origin.name}</p>
                <p><strong className='font-bold text-lg md:text-xl text-sky-300'>Dimension: </strong>{character.origin.dimension}</p>
              </div>
            </div>
          </div>
        </div>}
    </>
  )
}

CharacterDetails.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
