import { useState } from "react"
import {Tweet} from "./components/Tweet"
import './App.css';

export function App() {
 
  const [tweets, setTweets] = useState([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
  ])

  function addTweet() {
    setTweets([...tweets, `Meu Tweet`])
  }
  
  let r = Math.random() * 100
  let g = Math.random() * 100
  let b = Math.random() * 100



  return (
    
    <div>

      {tweets.map((message, index) => <Tweet text={`Esse é o ${message} de número ${index+1}`}/>)}
      <button onClick={addTweet} style={{background:`rgb(${r}, ${g}, ${b})`}}>Adicionar Tweet</button>
    </div>


  )
}


