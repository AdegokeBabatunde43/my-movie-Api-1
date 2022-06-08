import {useContext, useEffect} from 'react'
import {ReviewContext} from '../ReviewContext'
import ReviewItem from './ReviewItem'

const ReviewList = () => {
    const {review, setReview, searchKey, setSelectMovie} = useContext(ReviewContext)
    const url ='https://api.themoviedb.org/3/'
useEffect(()=>{
    const getMovies = async () => {
        const type = searchKey ? 'search': 'discover'
        const response = await fetch(`${url}${type}/movie?api_key=f6521014ff685673aa729f8f9bfeadbb&query=${searchKey}`)
        const review = await response.json()
        // console.log(review.results)
        setReview(review.results)
        setSelectMovie(review.results[0])
    }
    getMovies()
}, [setReview, setSelectMovie, searchKey])

if (! review || review.length === 0) {
    return 'loading'
}
   
  return (
    <div className="movie-container">
        {review.map(( film)=> (
            <ReviewItem key={film.id} film={film}/>
        ))}
    </div>
  )
}

export default ReviewList