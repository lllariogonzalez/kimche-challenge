import './App.css'
import Characters from './components/Characters'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import Filters from '@/components/Filters'
import { FiltersProvider } from '@/context/FiltersContext'

function App () {
  return (
    <div className='absolute top-0 w-full max-w-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#00ff00_100%)]'>
      <main className='flex flex-col items-center justify-start min-h-screen max-w-7xl my-10 mx-5 lg:mx-auto gap-8 '>
        <Header />
        <FiltersProvider>
          <SearchBar />
          <Filters />
          <Characters />
        </FiltersProvider>
      </main>
    </div>
  )
}

export default App
