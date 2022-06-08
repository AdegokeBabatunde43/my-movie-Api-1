import {useState} from 'react'
import ReviewForm from './component/ReviewForm'
import ReviewList from './component/ReviewList'
import ReviewProvider from './ReviewContext'
import './App.css'
import Banner from './component/Banner'

const App = () => {
  const [theme, setTheme]= useState('dark')

  const doubleClick = ()=> {
    setTheme(theme ==='dark'? 'light':'dark')
  }
  return (
    
        <div className="">
            <div className= {theme}>
              <span><button onClick={doubleClick}>{theme === 'dark' ? 'dark' : 'light'}</button></span>
      <ReviewProvider>
      <ReviewForm />
      <Banner  />
      <ReviewList />
    </ReviewProvider>
    </div>

        </div>


  )
}

export default App