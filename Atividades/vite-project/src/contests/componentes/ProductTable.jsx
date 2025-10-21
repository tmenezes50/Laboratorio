import React from "react";
import ProductRow from "./ProductRoww";
import ProductCatergoryRow from "./productCatergoryRow";

function ProductTable({ produtos, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  produtos.forEach((produtos) => {
    if (produtos.name.toLowerCase().indexOf(filterText.toLowerCase()) == -1) {
      return;
    }

    if (inStockOnly && !produtos.estoque) {
      return;
    }

    if (produtos.categoria !== lastCategory) {
        rows.push(
            <ProductCatergoryRow
                categoria={produtos.categoria}
                key = {produtos.categoria}
            />
        );
    }

    rows.push(
        <ProductRow
            produtos={produtos}
            key={produtos.name}
        />    
    );

    lastCategory = produtos.categoria;
  });

  return(
    <table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Preço</th>
            </tr>
        </thead>
        <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;