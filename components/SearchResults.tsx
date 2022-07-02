import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>
  onAddToWishList: (id: number) => void;
}

export function SearchResults({ results, onAddToWishList }: SearchResultsProps){

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

