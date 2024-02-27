import React, { useState } from 'react';
import { Button, Container, Form, InputGroup, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './EditRecipe.css';
import { editRecipe } from '../../JS/Actions/RecipeAction';

const EditRecipe = () => {
    const [newRecipe, setNewRecipe] = useState({});
    const recipe = useSelector((state) => state.recipeReducer.oneRecipe);
    const load = useSelector((state) => state.recipeReducer.load);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
      setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
    };

    const handleEdit = async () => {
      await dispatch(editRecipe(recipe._id, newRecipe));
      navigate('/myrecipes');
    };

    return (
      <div className="edit-recipe-container">
        {load ? (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Spinner animation="grow" variant="dark" />
          </div>
        ) : (
          <>
            <h1 className="edit-recipe-title">{recipe.title}</h1>
            <Container>
              <InputGroup className="mb-3">
                <Form.Control
                  className="edit-recipe-input"
                  name="title"
                  onChange={handleChange}
                  placeholder="Enter the Title"
                  type="text"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <Form.Control
                  className="edit-recipe-input"
                  name="time"
                  onChange={handleChange}
                  placeholder="Time"
                  type="Number"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <InputGroup>
                <InputGroup.Text>Ingredients</InputGroup.Text>
                <Form.Control
                  className="edit-recipe-input"
                  name="ingredients"
                  onChange={handleChange}
                  placeholder="Enter the ingredients"
                  as="textarea"
                  type="text"
                />
              </InputGroup>

              <InputGroup>
                <InputGroup.Text>Description</InputGroup.Text>
                <Form.Control
                  className="edit-recipe-input"
                  name="description"
                  onChange={handleChange}
                  placeholder="Enter the description"
                  as="textarea"
                  type="text"
                />
              </InputGroup>
              <div className="edit-recipe-buttons">
                <Button onClick={handleEdit} variant="outline-info">
                  Save
                </Button>
                <Button onClick={() => navigate('/myrecipes')} variant="outline-secondary">
                  Cancel
                </Button>
              </div>
            </Container>
          </>
        )}
      </div>
    );
};

export default EditRecipe;

