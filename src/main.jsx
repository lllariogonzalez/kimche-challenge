import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import { FiltersProvider } from '@/context/FiltersContext.jsx'

const apiUrl = import.meta.env.VITE_API_URL

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: apiUrl
  })
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </ApolloProvider>
)
