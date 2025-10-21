import React from 'react';

function SearchBar({onSearchChange}){
    const handleInputChange = (event) => {
        onSearchChange(event.target.value);
    }


return (
    <div className='searchBar'>
        <input
            type = 'text'
            placeholder='Pesquisar Item...'
            onChange={handleInputChange}
        />
    </div>
    );
}

export default SearchBar;
