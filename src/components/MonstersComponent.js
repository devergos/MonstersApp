import React, { Component } from 'react';
import { CardList } from './card-list/CardListComponent';
class Monsters extends Component {

    constructor(props) {
        super();

        this.state = {
            monsters: []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(monsters => this.setState({ monsters }))
    }



    render() {

        return (
            <div>
                <CardList monsters={this.state.monsters} />

            </div>
        )
    }
}

export default Monsters;