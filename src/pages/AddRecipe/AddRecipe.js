import React, { useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addRecipe } from "../../JS/Actions/RecipeAction";

const AddRecipes = () => {
  const [file, setFile] = useState(null);
  const [newRecipe, setNewRecipe] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setFile(e.target.files[0]);
  };

  const add = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("title", newRecipe.title);
    data.append("time", newRecipe.time);
    data.append("ingredients", newRecipe.ingredients);
    data.append("description", newRecipe.description);
    data.append("image", file);
    dispatch(addRecipe(data, navigate));
    // Clear form fields after successful submission
    setNewRecipe({});
    setFile(null);
  };

  return (
    <div style={{ marginTop: 200 }}>
      <h1 style={{textAlign:"center",color:"white"}}>New masterpiece</h1>
      <Container>
        <Form.Control type="file" onChange={handlePhoto} encType="multipart/form-data" />
        <InputGroup className="mb-3">
          <Form.Control
            name="title"
            onChange={handleChange}
            placeholder="Enter the Title"
            type="text"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            name="time"
            onChange={handleChange}
            placeholder="Time"
            type="number"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>Ingredients</InputGroup.Text>
          <Form.Control
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
            name="description"
            onChange={handleChange}
            placeholder="Enter the description"
            as="textarea"
            type="text"
          />
        </InputGroup>
        <div style={{ margin: 60 }}>
          <Button onClick={add} variant="outline-info">
            ADD
          </Button>
          <Button onClick={() => navigate(-1)} variant="outline-info">
            Back
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default AddRecipes;

  // const add = () => {
  //   // Check if any of the required fields are empty
  //   if (!newRecipe.title || !newRecipe.time || !newRecipe.ingredients || !newRecipe.description) {
  //     alert('Please fill in all the form fields');
  //   } else {
  //     dispatch(addRecipe(newRecipe));
  //     navigate('/myrecipes');
  //   }
  // };