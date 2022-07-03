import { List, ListRowRenderer } from 'react-virtualized'
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
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem 
          key={key}
          product={results[index]} 
        />
      </div>
    )
  }


  return (
    <div>
      <List 
        height={300}
        rowHeight={30}
        width={780}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  )
}

