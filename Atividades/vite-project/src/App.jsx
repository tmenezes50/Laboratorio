import React from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import './App.css';

// Dados dos produtos
const PRODUCTS = [
  { category: "Frutas", price: "R$1", stocked: true, name: "Maçã" },
  { category: "Frutas", price: "R$1", stocked: true, name: "Fruta do Conde" },
  { category: "Frutas", price: "R$2", stocked: false, name: "Banana" },
  { category: "Vegetables", price: "R$2", stocked: true, name: "Espinafre" },
  { category: "Vegetables", price: "R$4", stocked: false, name: "Abóbora" },
  { category: "Vegetables", price: "R$1", stocked: true, name: "Ervilha" }
];

function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

export default App;