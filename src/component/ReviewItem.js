import React from 'react'
import './ListItem.css'

const imgPath = "https://image.tmdb.org/t/p/w500/"
const unavailable ='https://www.movienewz.com/img/films/poster-holder.jpg'

const ReviewItem = ({film}) => {
  return (
    <div className='poster'>
      <img src={film.poster_path ? `${imgPath}${film.poster_path}` : unavailable} alt={film.title} className='movie-cover'/>
      <div>
        <h4 className='film-title'>{film.title}</h4>
        <span className='film-rating'>{film.vote_average}</span>
      </div>
    </div>
  )
}

export default ReviewItem