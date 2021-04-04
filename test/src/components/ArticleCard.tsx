import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

interface ArticleProps {
    key: number,
    userId: number,
    id: number,
    title: string,
    body: string,
  }

const ArticleCard:React.FC<ArticleProps> = ({ id, title, body }) =>  {

  return (
 
    <Card className="m-3" style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title>{ title }</Card.Title>
        <Card.Text>{ body }</Card.Text>
        <Card.Link href={`http://localhost:3000/article/${id}`}>Read the article</Card.Link>
        </Card.Body>
    </Card>
  )
}

export default ArticleCard;
