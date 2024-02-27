import { combineReducers } from "redux";
import recipeReducer from './RecipeReducer'
import AuthReducer from './AuthReducer' 

const RootReducer = combineReducers({recipeReducer,AuthReducer})

export default RootReducer