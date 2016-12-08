import React from 'react'
const { string } = React.PropTypes

const ShowRecipe = React.createClass({
  propTypes: {
    picturePlating: string.isRequired,
    title: string.isRequired,
    description: string.isRequired,
    created: string.isRequired
    // chefThumbnail: string.isRequired,
    // created: number.isRequired,
    // categories: array.isRequired,
  },
  render () {
    return (
      <div className='show-card'>
        <img src={`/public/img/recipes/${this.props.picturePlating}`} />
        <div>
          <h3>{this.props.title}</h3>
          {/* <h4>{this.props.chef["name"]}</h4>
          <h4>{this.props.chef["thumbnail"]}</h4> */}
          <p>({this.props.created})</p>
          {/* <p>({this.props.categories})</p> */}
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
})

export default ShowRecipe
