import React from "react";
import RecipeList from "../../components/RecipeList/RecipeList";
import { SiCodechef } from "react-icons/si";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const MyRecipes = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          border: "2px solid #ccc",
          padding: "10px",
          fontFamily: "fantasy",
        }}
      >
        <h1 style={{ marginTop: 80,  color:"white"}}>
          My creations <SiCodechef />
        </h1>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <Button variant="outline-danger" onClick={() => navigate("/addRecipe")}>Add new Recipe</Button>
      </div>
      <RecipeList />
    </div>
  );
};

export default MyRecipes;
