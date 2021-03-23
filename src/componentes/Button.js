import Button from 'react-bootstrap/Button';

const ButtonQuote = ({colorVariant, content, URL, newquote}) => {
    return (
        <Button onClick={newquote} href={URL} style={{ backgroundColor: colorVariant }}>{content}</Button> 
    )
  };
  
export default ButtonQuote;  