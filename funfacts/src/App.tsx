import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() 
{
  
  const api_url = 'https://uselessfacts.jsph.pl/api/v2/facts/random';
  const [fact, setFact] = useState<string>("");
  const fetchFact = async () => {
    const response = await fetch(api_url);
    const data = await response.json();
    setFact(data.text);
  };
  return (
    <div className="container">
      <h1 className="title">Krupali's Fun facts</h1>
      <button className="fetch-btn" onClick={fetchFact}>Get Fun Fact</button>
      <p className="fact-text">{fact}</p>
    </div>
  )
}

export default App
