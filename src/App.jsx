import './App.css'
import Characters from './components/Characters'
import Loader from './components/Loader'
import Header from './components/Header'
import { useCharacters } from './characters/custom-hooks'
import Error from './components/Error'
import SearchBar from './components/SearchBar'
import { useCallback, useEffect } from 'react'

function App () {
  const [getCharacters, { data, error, loading }] = useCharacters()

  const handleSearch = useCallback((filter = '') => {
    getCharacters({ variables: { page: 1, filter } })
  }, [getCharacters])

  useEffect(() => {
    handleSearch()
  }, [handleSearch])

  return (
    <main className='flex flex-col items-center justify-start min-h-screen max-w-7xl my-20 mx-5 lg:mx-auto gap-8'>
      <Header />
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <Error>{error.message}</Error>}
      {data && <Characters characters={data?.characters?.results} />}
    </main>
  )
}

export default App
