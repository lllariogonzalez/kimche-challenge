import './App.css'
import Characters from './components/Characters'
import Loader from './components/Loader'
import Header from './components/Header'
import { useCharacters } from './characters/custom-hooks'
import Error from './components/Error'

function App () {
  const { data, error, loading } = useCharacters()

  if (error) {
    return (
      <Error>
        {error.message}
      </Error>
    )
  }

  return (
    <main className='flex flex-col items-center justify-center min-h-screen max-w-7xl m-auto p-8'>
      {loading
        ? <Loader />
        : (
          <>
            <Header />
            <Characters characters={data.characters.results} />
          </>
          )}
    </main>
  )
}

export default App
