import React from 'react';
import './card.styles.css';

export const Card = ({ monster }) =>
    (
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/${monster.id}?set=set2`} />
            <h1 key={monster.id}>{monster.name}</h1>
        </div>
    )
