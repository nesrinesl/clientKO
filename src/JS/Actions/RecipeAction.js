import {
  FAIL_RECIPE,
  LOAD_RECIPE,
  ONE_RECIPE,
  SUCCESS_RECIPE,
} from "../ActionTypes/ActionTypes";
import axios from "axios";

//get recipes
export const getRecipes = () => async (dispatch) => {
  dispatch({ type: LOAD_RECIPE });
  try {
    const recipes = await axios.get("/api/recipes/getRecipes");
    dispatch({ type: SUCCESS_RECIPE, payload: recipes.data });
  } catch (error) {
    dispatch({ type: FAIL_RECIPE, payload: error });
  }
};

//get recipe by id 
export const getOneRecipe = (id) => async (dispatch) => {
  dispatch({ type: LOAD_RECIPE });
  try {
    const recipe = await axios.get(`/api/recipes/getRecipeById/${id}`);
    dispatch({ type: ONE_RECIPE, payload: recipe.data });
  } catch (error) {
    dispatch({ type: FAIL_RECIPE, payload: error });
  }
};
//add recipe
export const addRecipe = (newRecipe, navigate) => async (dispatch) => {
  try {
    const result = await axios.post("/api/recipes/addRecipe",newRecipe);
    dispatch({ type: SUCCESS_RECIPE, payload: result.data });
    dispatch(getRecipes())
    navigate('/myrecipes')
  } catch (error) {
    dispatch({ type: FAIL_RECIPE, payload: error.response.data.errors });
  }
};
// delete recipe
export const deleteRecipe = (id) => async (dispatch) => {
  try {
    const result = await axios.delete(`/api/recipes/deleteRecipe/${id}`);
    dispatch({ type: SUCCESS_RECIPE, payload: result.data });
    dispatch(getRecipes())
  } catch (error) {
    dispatch({ type: FAIL_RECIPE, payload: error });
  }
};

//edit recipe
export const editRecipe = (id,newRecipe) => async (dispatch) => {
  try {
     await axios.put(`/api/recipes/editRecipe/${id}`,newRecipe);
    // dispatch({ type: SUCCESS_RECIPE, payload: result.data });
    dispatch(getRecipes())
  } catch (error) {
    dispatch({ type: FAIL_RECIPE, payload: error.response });
  }
};
