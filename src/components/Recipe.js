import React, { Component } from 'react'

import { Link } from "react-router-dom";

const API_KEY = '731dd367ca87f8649a564f647a99554d';

export class Recipe extends Component {
    state = {
        activeRecipe: []
    }

    componentDidMount = async () => {
        const title = this.props.location.state;
        const req = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);

        const res = await req.json();

        this.setState({ activeRecipe: res.recipes[0] });

    }
  render() {
    console.log(this.state.activeRecipe)
    const recipe = this.state.activeRecipe;
    return (
      <div>
      <header className="App-header">
          <h1 className="App-title">Foodie</h1>
        </header>
        <div style={{backgroundImage: `url(${recipe.image_url})`, height: '300px', backgroundSize: '100%', marginTop: '-2rem', opacity: '.6', backgroundPositionY: 'center'}}></div>
        <div className="container">
        { this.state.activeRecipe.length !== 0 &&
          <div className="active-recipe">
            <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title}/>
            <h3 className="active-recipe__title">{ recipe.title }</h3>
            <h4 className="active-recipe__publisher">
              Publisher: <span>{ recipe.publisher }</span>
            </h4>
            <p className="active-recipe__website">Website: 
              <span><a href={recipe.source_url}>{recipe.publisher_url}</a></span>
            </p>
            <button className="active-recipe__button" style={{margin: "60px auto"}}>
              <Link to="/">Go Home</Link>
            </button>
          </div>
        }
      </div>
      </div>
    )
  }
}

export default Recipe

