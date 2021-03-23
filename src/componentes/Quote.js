import Container from 'react-bootstrap/Container';

const Quote = ({colorVariant, quote, author}) => {
    return (
        <Container style={{ color: colorVariant }}>
            <p>{quote}</p>
            <p>- {author}</p>
        </Container> 
    )
  };
  
export default Quote;  