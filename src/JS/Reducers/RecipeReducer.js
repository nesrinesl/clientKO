import {  LOAD_RECIPE, SUCCESS_RECIPE, FAIL_RECIPE, ONE_RECIPE } from "../ActionTypes/ActionTypes";

const initialState = {
    load: false,
    success: null,
    fail: null,
    listRecipes: [],
    oneRecipe: {},
};

const recipeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_RECIPE:
            return { ...state,load: true };
        case SUCCESS_RECIPE:
            return { ...state,load: false, listRecipes: payload, success: payload.success };
        case FAIL_RECIPE:
            return { ...state,load: false, fail: payload.errors };
        case ONE_RECIPE:
            return { ...state,oneRecipe: payload, load: false };
        default:
            return state;
    }
};

export default recipeReducer;