import './App.css';
import QuoteBox from './componentes/QuoteBox.js';
import { useState } from 'react';
import Data from "./quotes.json";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const randomIndex = (length) => Math.floor(Math.random() * length);
const randomQuote = () => Data[randomIndex(Data.length)];

function App() {
  const colors = [
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
const [currentQuote, setCurrentQuote] = useState(randomQuote());
const [currentColor, setCurrentColor] = useState(
  colors[randomIndex(colors.length)]
);

const handleFetchCurrentNote = (event) => {
  setCurrentQuote(randomQuote());
  setCurrentColor(colors[randomIndex(colors.length)]);
};


  return (
    <Container className="j-center a-center d-flex c-fluid" fluid style={{ backgroundColor: currentColor}}>
      <Row>
        <Col>
          <QuoteBox 
            colorVariant={currentColor} 
            quotePayload={currentQuote}
            fetchNewQuote={handleFetchCurrentNote}
          />
        </Col>
      </Row>
    </Container> 
    
  );
}

export default App;
