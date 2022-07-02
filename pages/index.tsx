import type { NextPage } from 'next'
import { FormEvent, useCallback, useState } from 'react'
import { SearchResults } from '../components/SearchResults'


type Results = {
  totalPrice: number;
  data: any[]
}

type TotalProps = {
  total: number;
  price: number;
}

interface ProductType {
  id: number;
  title: string;
  price: number;
  priceFormatted: string;
}

const Home: NextPage = () => {
  const [search, setSearch] = useState('')

  const [results, setResults] = useState<Results>({
    totalPrice: 0,
    data: []
  })

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault()

    if(!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
  
    const data = await response.json()

    const products = data.map((product: ProductType) => {

      return {
        id: product.id,
        title: product.title,
        price: product.price,
        priceFormatted: formatter.format(product.price)
      }
    })

    const totalPrice = data.reduce((total: number, product: ProductType) => {
      return (total + product.price)
    }, 0)

    setResults({ totalPrice, data: products })
  }

  const addToWishList = useCallback(async (id: number) => {
    console.log(id)
  }, [])

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

      <SearchResults 
      results={results.data}
      totalPrice={results.totalPrice} 
      onAddToWishList={addToWishList}
      />
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