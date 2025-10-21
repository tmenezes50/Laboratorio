import React from "react";

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <form>
      <input
        type="text"
        placeholde="Pesquisar..."
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />

      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />{" "}
        Apenas Produtos em Estoque
      </p>
    </form>
  );
}

export default SearchBar;