import Card from 'react-bootstrap/Card'
import ButtonQuote from './Button.js';
import Quote from './Quote.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const QuoteBox = ({ quotePayload, fetchNewQuote, colorVariant }) => {
    const { quote, author } = quotePayload;
    const url = `https://twiter.com/intent/tweet?text=${quote}-${author}`;

    return (
        <Container style={{ backgroudColor: colorVariant}}>
            <Card>
                <Card.Body>
                    <Row>
                        <Col>
                            <Quote quote="hola" author="fulanito"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ButtonQuote URL={url} content="Tweet"/>
                        </Col>
                        <Col>
                            <ButtonQuote newquote={fetchNewQuote} content="New Quote"/>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>  
    )
  };
  
export default QuoteBox;  