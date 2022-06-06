import React from 'react'
import FetchJob from './components/FetchJob'
import FetchUser from './components/FetchUser'
import './App.css'

const App = () => {
  return (
    <>
      <div className='App'>
        <h1>Data fetching with API</h1>
        <FetchJob className="fetchJob" />
        <FetchUser className="fetchUser" />
        <footer>Built with ❤️ by Sohail</footer>
      </div>
    </>
  )
}

export default App