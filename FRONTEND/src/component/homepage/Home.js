import React from 'react'
import "./home.css"

const Home = (props) => {
  
  return (
   <div className="homepage">
    <h1>hellow Home</h1>
    <div className="button" onClick={props.setUserr}>logout</div>
   </div>

  )
}

export default Home