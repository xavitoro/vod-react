import React from 'react'
const { string, number, shape, array } = React.PropTypes

const ShowRecipe = React.createClass({
  propTypes: {
    videoThumbnail: string.isRequired,
    title: string.isRequired,
    description: string.isRequired,
    created: number.isRequired,
    author: shape({
      name: string.isRequired,
      thumbnail: string.isRequired
    }),
    categories: array.isRequired
  },
  render () {
    const timestamp = Date(this.props.created)
    // const date = (timestamp.getMonth()+1) + '/' + timestamp.getFullYear()
    return (
      <div className='show-card'>
        <img src={`/public/img/recipes/${this.props.videoThumbnail}`} />
        <div>
          <h4>{this.props.author.name}</h4>
          <img className='author-thumbnail' src={`/public/img/recipes/${this.props.author.thumbnail}`} />
          <h3>{this.props.title}</h3>
          <p>({timestamp})</p>
          <p>({this.props.categories.toString()})</p>
          <p>{this.props.description}</p>
        </div>
        <button>READ MORE</button>
      </div>
    )
  }
})

export default ShowRecipe
