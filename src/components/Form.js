import React from 'react'

export default function Form(props) {
  return (
    <form onSubmit={props.getRecipe}>
        <input type="text"/>
        <button>Search</button>
    </form>
  )
}
