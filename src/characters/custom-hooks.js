import { useQuery } from '@apollo/client'
import { GET_CHARACTERS } from './graphql-queries'

export function useCharacters () {
  const result = useQuery(GET_CHARACTERS)
  return result
}
