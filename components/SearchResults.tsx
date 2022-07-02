import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>
  onAddToWishList: (id: number) => void;
}

export function SearchResults({ results, onAddToWishList }: SearchResultsProps){
  const totalPrice = useMemo(() => {
    results.reduce((total, product) => {
      return total + product.price
    }, 0)
  }, [])

  return (
    <div>
      {results.map(product => {
        return (
          <ProductItem 
            key={product.id}
            onAddToWishList={onAddToWishList}
            product={product} 
          />
        )
      })}
    </div>
  )
}

