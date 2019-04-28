import React, { Component } from 'react'

const API_KEY = '731dd367ca87f8649a564f647a99554d';

export class Recipe extends Component {
    state = {
        activeRecipe: []
    }

    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        const req = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);

        const res = await req.json();

        this.setState({ activeRecipe: res.recipes[0] });

    }
  render() {
    return (
      <div>
      </div>
    )
  }
}

export default Recipe

