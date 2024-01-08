import './App.css'
import Characters from './components/Characters'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import Filters from '@/components/Filters'

function App () {
  return (
    <main className='flex flex-col items-center justify-start min-h-screen max-w-7xl my-10 mx-5 lg:mx-auto gap-8'>
      <Header />
      <SearchBar />
      <Filters />
      <Characters />
    </main>
  )
}

export default App
