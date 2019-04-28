import React from 'react'

export default function Recipes(props) {
  return (
    <div>
      {props.recipes.map((recipe) => {
          return (
          <div className="col-3" key={recipe.recipe_id}>
              <img src={recipe.image_url} />
              <p>{recipe.title}</p>
          </div>
          )
      })}
    </div>
  )
}

