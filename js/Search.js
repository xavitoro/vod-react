import React from 'react'
import ShowRecipe from './Recipe'
import preload from '../public/dataRecipe.json'

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermChange (event) {
    this.setState({searchTerm: event.target.value})
  },
  render () {
    return (
      <div className='search'>
        <header>
          <h1>{this.state.searchTerm}</h1>
          <input type='text' placeholder='Search' value={this.state.searchTerm} onChange={this.handleSearchTermChange} />
        </header>
        <div>
          {preload.recipes
            .filter((recipe) => `${recipe.title} ${recipe.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((recipe) => {
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
