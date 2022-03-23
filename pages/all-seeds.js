import CategoryFilters from "../components/CategoryFilters";
import SearchBar from "../components/SearchBar";
import ConditionFilters from "../components/ConditionFilters";
import PriceFilters from "../components/PriceFilters";
import ProductDisplay from "../components/ProductDisplay";
import products from "../database/products";
import { useEffect, useState } from "react";

export default function AllSeeds() {
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState(null);

  useEffect(() => {
    console.log(category);
    console.log(searchTerm);
  });

  console.log(products);
  return (
    <div>
      <CategoryFilters
        category={category}
        setCategory={setCategory}
      ></CategoryFilters>
      <SearchBar setSearchTerm={setSearchTerm}></SearchBar>
      <ConditionFilters></ConditionFilters>
      <PriceFilters></PriceFilters>
      <ProductDisplay
        category={category}
        searchTerm={searchTerm}
      ></ProductDisplay>
    </div>
  );
}
