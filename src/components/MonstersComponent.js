import React, { Component } from 'react';

import { CardList } from './card-list/CardListComponent';
import { Search } from './search-box/SearchBox.component';
class Monsters extends Component {

    constructor(props) {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(monsters => this.setState({ monsters }))
    }


    onChangeField = (e) => {
        this.setState({ searchField: e.target.value.toLowerCase() })
    }


    render() {
        const { searchField } = this.state;
        const monsters = this.state.monsters.filter(monster => monster.name.toLowerCase().includes(searchField));
        return (
            <div>
                <Search searchMonster={this.onChangeField} />
                <CardList monsters={monsters} />
            </div>
        )
    }
}

export default Monsters;