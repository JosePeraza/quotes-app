import './App.css';
import QuoteBox from './componentes/QuoteBox.js';
import { useState } from 'react';
import Data from "./quotes.json";

const randomIndex = (length) => Math.floor(Math.rendom() * length);
const randomQuote = () => Data.quotes[randomIndex(Data.quotes.length)];

function App() {
  const color = [
    "#007580",
    "#282846",
    "#d8ebe4",
    "#bb8082",
    "#bb8082",
    "#6e7582",
    "#046582",
    "#440a67",
    "#93329e",
    "#b4aee8",
    "#b4aee8",
    "#ffe3fe",
    "#810034",
    "#ff005c",
  ];
const [currentQuote, setCurrentQuote] = useState(randomQuote);

  return (
    <QuoteBox />
  );
}

export default App;
