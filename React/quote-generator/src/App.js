
import './App.css';
import { useState } from "react";

const quotes=[
  'if you are good enough, never do it for free.',
  'I am not afraid of man whon practice 1000 kicks 1 time,but rather 1 kick 1000 times.',
  'hi.',
  'hmm'
]

function App() {
  const [quote, setQuote] = useState(quotes[0])

  function randomQuoteGenerator(){
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    setQuote(randomQuote)
  }

  return (
    <div className="App">
      <div>{quote}</div>
      <button onClick={randomQuoteGenerator}>Click Me</button>
    </div>
  );
}

export default App;
