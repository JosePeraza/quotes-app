import Card from 'react-bootstrap/Card'
import ButtonQuote from './Button.js';
import Quote from './Quote.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const QuoteBox = ({ quotePayload, fetchNewQuote, colorVariant }) => {

    const { quoteText, quoteAuthor } = quotePayload;
    
    const url = `https://twiter.com/intent/tweet?text=${quoteText}-${quoteAuthor}`;


    return (
        <Container>
            <Card>
                <Card.Body>
                    <Row>
                        <Col>
                            <Quote colorVariant={colorVariant} quote={quoteText} author={quoteAuthor}/>
                        </Col>
                    </Row>
                    <Row>
                        <Container className="d-flex j-space-between" fluid>
                            <ButtonQuote  colorVariant={colorVariant} URL={url} content="Tweet"/>
                            <ButtonQuote  colorVariant={colorVariant} newquote={fetchNewQuote} content="New Quote"/>
                        </Container>
                    </Row>
                </Card.Body>
            </Card>
        </Container>  
    )
  };
  
export default QuoteBox;  