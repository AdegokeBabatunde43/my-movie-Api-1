import {useState, createContext} from 'react'


export const ReviewContext = createContext()



const ReviewProvider = ({children}) => {
    const [review, setReview]= useState('')
    const [searchKey, setSearchKey]= useState('')
    const [selectMovie, setSelectMovie]= useState('')


  return (
    <ReviewContext.Provider value = {{review, setReview, selectMovie, searchKey, setSearchKey, setSelectMovie}}>
        {children}
      {/* <div className="" style={{backgroundImage: `(${imgPath}${selectMovie.backdrop_path})`}}>
        <div className="movie-content" >
        <h1 className="movie-title">{selectMovie.title}</h1>
        <span className="movie-overview">{selectMovie.overview}</span>
        </div>

      </div> */}

    
    </ReviewContext.Provider>
  )
}

export default ReviewProvider