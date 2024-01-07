import { useLazyQuery } from '@apollo/client'
import { GET_CHARACTERS } from './graphql-queries'

export function useCharacters () {
  const result = useLazyQuery(GET_CHARACTERS)
  return result
}
