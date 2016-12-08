import React from 'react'
import ShowRecipe from './Recipe'
import preload from '../public/dataRecipe.json'

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        <div>
          {preload.recipes.map((recipe) => {
            return (
              <ShowRecipe {...recipe} key={recipe._id} />
            )
          })}
        </div>
      </div>
    )
  }
})

export default Search
