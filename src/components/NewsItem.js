import React from "react";
import { Card, Button } from "react-bootstrap";

const NewsItem = (props) => {
  let { title, description, image, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <a href={newsUrl} style={{ textDecoration: 'none', color: 'black' }} target="_blank" rel="noreferrer">
        <Card>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-dark" style={{ left: '87%', zIndex: '1' }}>{source}</span>

          <Card.Img variant="top" src={image} style={{ height: "200px" }} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <small className="text-muted">By {author} on {new Date(date).toLocaleDateString()}{' '}{new Date(date).toLocaleTimeString()}</small> <br />
            <Button variant="dark" size="sm" href={newsUrl} rel="noreferrer" target="_blank" className="mt-2">
              Read more
            </Button>
          </Card.Body>
        </Card>
      </a>
    </div>
  );
}

export default NewsItem;
