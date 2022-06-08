import {useState, useContext} from 'react'
import {ReviewContext} from '../ReviewContext'

const ReviewForm = () => {
    const {searchKey, setSearchKey}=useContext(ReviewContext)
    const [watch, setWatch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
        setSearchKey(watch)
        setWatch('')

    }
  return (
    <header>
        <h1>nFlix</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Search' required value={watch} onChange={(e)=> setWatch(e.target.value)}/>
            <button type="submit">Search</button>

        </form>

    </header>
  )
}

export default ReviewForm