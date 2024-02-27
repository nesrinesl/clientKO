import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../JS/Actions/RecipeAction";
import RecipeCard from "../RecipeCard/RecipeCard";
import { Spinner } from "react-bootstrap";


const RecipeList = () => {
  const dispatch = useDispatch();
  const load = useSelector((state) => state.recipeReducer.load);
  const listRecipes = useSelector((state) => state.recipeReducer.listRecipes);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  console.log(load);
  console.log(listRecipes);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginTop: "6%",
      }}
    >
      {load ? (
        <div style={{ display:"flex", justifyContent: "center" }}>
          <Spinner animation="border" variant="danger" />
        </div>
      ) : (
        listRecipes.map((recipe) => (
          <RecipeCard  recipe={recipe} key={recipe._id} />
        ))
      )}
    </div>
  );
};

export default RecipeList;
