import type { NextPage } from 'next'
import { FormEvent, useState } from 'react'
import { SearchResults } from '../components/SearchResults'

const Home: NextPage = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault()

    if(!search.trim()) {
      return;
    }


    const response = await fetch(`http://localhost:3333/products?q=${search}`)
  
    const data = await response.json()

    setResults(data)
  }

  return (
    <>
      <h1>Perfomando Aplicação - Ignite</h1>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input 
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <button type='submit'>Enviar</button>
      </form>

      <SearchResults results={results} />
   </>
  )
}

export default Home




/**

FLUXO DE RENDERIZAÇÃO DO REACT:

* 1. Criar uma nova versão do componente
* 2. Comparar com a versão anterior
* 3. Se houverem alterações, vai atualizar o que alterou 

**/