import React, { useState } from 'react'
import '../styles/App.css';
import star from '../star.png'
const App = () => {
  const [height, setHeight] = useState(300);
  const [width, setWidth] = useState(300);
  
  const increseFunction = () => {
  setHeight(height+2);
  setWidth(width+2);
  }
  
   const handleClick2 = () => {
  setCounter(counter-1)
  }
  
  return (
    <>
       <div id="main" onClick = {increseFunction}>
           <img src={star}  height={height} width={width} />
       </div>
    </>
  )
}


export default App;
