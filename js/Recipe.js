import React from 'react'
import Moment from 'react-moment'
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
    const { videoThumbnail, title, description, created, author, categories } = this.props
    // const date = (timestamp.getMonth()+1) + '/' + timestamp.getFullYear()
    return (
      <div className='show-card'>
        <img src={`/public/img/recipes/${videoThumbnail}`} />
        <div>
          <h4>{author.name}</h4>
          <img className='author-thumbnail' src={`/public/img/recipes/${author.thumbnail}`} />
          <h3>{title}</h3>
          <p><Moment unix format='MM/YYYY'>{created}</Moment></p>
          <p>({categories.join(' | ')})</p>
          <p>{description}</p>
        </div>
        <button>READ MORE</button>
      </div>
    )
  }
})

export default ShowRecipe
