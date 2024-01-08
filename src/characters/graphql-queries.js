import { gql } from '@apollo/client'

export const GET_CHARACTERS = gql`
query($page: Int, $name: String, $status: String, $species: String, $gender: String) {
  characters(page: $page, filter: { name: $name, status: $status, species: $species, gender: $gender }) {
    info {
      count
      pages
      next
      prev
    }
    results {
      id
      name
      image
    }
  }
}
`

export const GET_CHARACTER = gql`
query Character($id: ID!){
  character(id: $id){
  id
  name
  image
  status
  gender
  species
  type
  location {
    name
  }
  origin {
    name
    dimension
  }
}
}
`
