//import './style.css'
import React, { useState } from 'react';
import SearchBar from './componentes/searchBar';

const itensIniciais = [
  {id: 1, name: "Maçã", categoria: "Fruta"},
  {id: 2, name: "Cenoura", categoria: "Vegetal"},
  {id: 3, name: "Banana", categoria: "Fruta"},
  {id: 4, name: "Tomate", categoria: "Fruta"},
  {id: 5, name: "Repolho", categoria: "Vegetal"},
  {id: 6, name: "Cebola", categoria: "Vegetal"},

]

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const items = itensIniciais;

    const handleSearchChange = (value) => {
      setSearchTerm(value);
    };
    const filteredItems = items.filter(item => {
      const name = item.name.toLowerCase();
      const search = searchTerm.toLowerCase();

      return name.includes(search);
    });

    return(
      <div>
        <h1>Aplicação de Busca</h1>

        <SearchBar onSearchChange={handleSearchChange}/>
        <hr />

        <h2>Resultados:</h2>
        {filteredItems.length > 0 ? (
          <ul>
            {filteredItems.map(item => (
              <li key={item.id}>
                {item.name} ({item.categoria})
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum item encontrado</p>
        )}
      </div>
    );
}


export default App;