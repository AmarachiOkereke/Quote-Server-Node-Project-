import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [randomQuote, setRandomQuotes] = useState({});
  useEffect(() => {
    generateQuote()
  }, []);

  //This gets a new random quote every time the button is pressed
  const generateQuote = () => {
    fetch("https://amarachiokereke-quote-server.glitch.me/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        setRandomQuotes(data);
      });
  };
  return (
    <div className="App">
      <h1>Quote Server Project</h1>
      <div className="container">
        <h3>
          "{randomQuote.quote} - {randomQuote.author}"
        </h3>
        <button onClick={generateQuote}> Random Quote! </button>
      </div>
      <hr/>
    </div>
  );
}

export default App;
