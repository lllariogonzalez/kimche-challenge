import { useLazyQuery } from '@apollo/client'
import { GET_CHARACTERS } from './graphql-queries'
import { useCallback, useContext, useEffect } from 'react'
import { FiltersContext } from '../context/FiltersContext'
import debounce from 'just-debounce-it'

export function useCharacters () {
  const [getCharacters, { data, error, loading }] = useLazyQuery(GET_CHARACTERS)
  const characters = data?.characters?.results

  const { filters } = useContext(FiltersContext)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceGetCharacters = useCallback(
    debounce((filters) => {
      getCharacters({ variables: { page: 1, ...filters } })
    }, 300)
    , [getCharacters])

  useEffect(() => {
    debounceGetCharacters(filters)
  }, [debounceGetCharacters, filters])

  return { characters, error, loading }
}
