import React from 'react';
import './searchBox.styles.css';
export const Search = (props) => (

    <input className="search" type="search" placeholder="search monsters" onChange={props.searchMonster} />

)