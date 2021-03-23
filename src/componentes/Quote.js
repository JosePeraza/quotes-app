import Container from 'react-bootstrap/Container';

const Quote = ({colorVariant, quote, author}) => {
    return (
        <Container style={{ color: colorVariant }}>
            <h4>{quote}</h4>
            <p align="right">- {author}</p>
        </Container> 
    )
  };
  
export default Quote;  