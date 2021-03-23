import Button from 'react-bootstrap/Button';

const ButtonQuote = ({colorVariant, content, URL}) => {
    return (
        <Button href={URL} style={{ backgroundColor: colorVariant }}>{content}</Button> 
    )
  };
  
export default ButtonQuote;  