import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const user = useSelector((state) => state.AuthReducer.user);
  const navigate = useNavigate();

  return (
    <div style={{ margin: '150px 50px 0', display: 'flex', flexDirection: 'column' }}>
      <h3 style={{ textAlign: 'center', color: 'red', fontFamily: 'fantasy',margin:50 }}>
      My Profile
      </h3>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: '1' }}>
          <Card
            style={{
              borderColor: 'red',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s',
            }}
          >
            <Card.Body>
              <Card.Title style={{ marginBottom: '5px', color:'black' }}>First Name: {user && user.name}</Card.Title>
              <Card.Title style={{ marginBottom: '5px',color:'black' }}>Last Name: {user && user.lastName}</Card.Title>
              <Card.Text style={{ marginBottom: '5px',color:'black' }}>Email: {user && user.email}</Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div style={{ flex: '1', marginLeft: '50px' }}>
          <Card
            style={{
              borderColor: 'brown',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s',
            }}
          >
            <Card.Body style={{ textAlign: 'center' }}>
              <Card.Title style={{ color: '#8B4513', fontSize: '20px', fontFamily: 'cursive', marginBottom: '15px' }}>
                Show us what you have
              </Card.Title>
              <Button onClick={() => navigate('/addRecipe')} variant="outline-warning">LET'S COOK</Button>
            </Card.Body>
          </Card>

          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <Button onClick={() => navigate('/myrecipes')} variant="outline-danger">
              My Recipes
            </Button>
          </div>
        </div>
      </div>



      
    </div>
  );
};

export default EditProfile;
