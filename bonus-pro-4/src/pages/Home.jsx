import React from 'react'
import './Home.css';

const Home = ({clearData}) => {
  return (
    <div className='container'>
     <h1>Welcome to the Home Page</h1>
      <button onClick={clearData} className='homebutton'>Clear Data</button>
    </div>
  )
}

export default Home
