import { useLazyQuery } from '@apollo/client'
import { GET_CHARACTER, GET_CHARACTERS } from './graphql-queries'
import { useCallback, useContext, useEffect } from 'react'
import { FiltersContext } from '../context/FiltersContext'
import debounce from 'just-debounce-it'

export function useCharacters () {
  const [getCharacters, { data, error, loading }] = useLazyQuery(GET_CHARACTERS)
  const characters = data?.characters?.results
  const info = data?.characters?.info

  const { filters } = useContext(FiltersContext)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceGetCharacters = useCallback(
    debounce((filters) => {
      getCharacters({ variables: { ...filters } })
    }, 300)
    , [getCharacters])

  useEffect(() => {
    debounceGetCharacters(filters)
  }, [debounceGetCharacters, filters])

  return { characters, info, error, loading }
}

export function useCharacter () {
  const [getCharacter, { data, error, loading }] = useLazyQuery(GET_CHARACTER)
  const character = data?.character
  return [getCharacter, { character, error, loading }]
}
