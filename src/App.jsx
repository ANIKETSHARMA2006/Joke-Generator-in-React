import { useState,useEffect } from 'react'
import Joke from './Joke'
import './App.css'

function App() {

  const [joke, setjoke]=useState(null);
  const [btn, setbtn]=useState(true);

  useEffect(()=>{
    fetch('https://official-joke-api.appspot.com/random_joke')
  .then((res)=>{
    return res.json()
  })
  .then((data)=>{
    setjoke(data)
  })
  },[btn])
  
  return (
    <>
    { joke?
      <Joke setup={joke.setup} punchline={joke.punchline}/>
    : ""
    }
    <button onClick={()=>{setbtn(!btn)}}>Generate Joke</button>
    </>
  )
}

export default App