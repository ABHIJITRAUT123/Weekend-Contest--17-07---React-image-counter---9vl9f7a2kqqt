import React, { useState } from 'react'
import '../styles/App.css';
import star from '../star.png'
const App = () => {
  const [counter, setCounter] = useState(0)
  
  const handleClick1 = () => {
  setCounter(counter+1)
  }
  
   const handleClick2 = () => {
  setCounter(counter-1)
  }
  
  return (
    <>
       <div id="main">
           <img src={star}  height="300px" width="300px" />
       </div>
    </>
  )
}


export default App;
