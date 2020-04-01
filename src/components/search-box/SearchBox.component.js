import React from 'react';
import './searchBox.styles.css';
export const Search = ({placeholder,searchMonster}) => (

    <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={searchMonster}
    />

)