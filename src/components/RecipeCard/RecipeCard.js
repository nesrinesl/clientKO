import React, { useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <Card
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: '18rem',
          border: `2px solid ${isHovered ? 'red' : 'black'}`,
          boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
          transition: 'border-color 0.3s, box-shadow 0.3s',
        }}
      >
        <Card.Img variant="top" alt="img" src={recipe.profile_img} />
        <Card.Body>
          <Card.Title style={{ color: 'red' }}>{recipe.title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{recipe.time}</ListGroup.Item>
          <ListGroup.Item>{recipe.ingredients}</ListGroup.Item>
        </ListGroup>
        <Button onClick={() => navigate(`/recipeDetails/${recipe._id}`)} variant="outline-danger">
          Recipe Details
        </Button>
      </Card>
    </div>
  );
};

export default RecipeCard;
