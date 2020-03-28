import React from 'react';
import './cardList.styles.css';
import { Card } from '../card/Card.component';
export const CardList = ({ monsters }) => {

    return (
        <div className={"card-list"}>
            {monsters.map(monster => <Card monster={monster} />)}
        </div>
    )
}