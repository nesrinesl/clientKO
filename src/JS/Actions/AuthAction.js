import axios from "axios";
import { CLEAR_ERRORS_USER, CLEAR_SUCCESS_USER, CURRENT_USER, FAIL_USER, LOAD_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER, UPDATE_PROFILE_IMAGE_FAIL, UPDATE_PROFILE_IMAGE_SUCCESS } from "../ActionTypes/ActionTypes";
//register
export const register = (newUser,navigate) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const result = await axios.post("/api/auth/register",newUser);
    dispatch({ type: REGISTER_USER, payload: result.data });
    navigate('/')
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

//login
export const login = (user,navigate) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const result = await axios.post("/api/auth/login",user);
    dispatch({ type: LOGIN_USER, payload: result.data });
    navigate('/profile')

  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

//logout
export const logout = (navigate) => async (dispatch) => {
  dispatch({ type: LOGOUT_USER })
  navigate("/")
};

// clear error
export const clearErrorsUser = () => {
  return {
    type: CLEAR_ERRORS_USER,
  };
};
//clear success
export const clearSuccessUser = () => {
  return {
    type: CLEAR_SUCCESS_USER,
  };
};


  
//current user
export const current =()=>async(dispatch)=>{
  dispatch({type:LOAD_USER})
  try {
      const config ={
          headers:{authorization:localStorage.getItem("token")}
        }
        let result = await axios.get("/api/auth/current",config) // Add leading slash
        dispatch({type:CURRENT_USER,payload:result.data})
  } catch (error) {
      dispatch({type:FAIL_USER,payload:error.response})

  }
}

// authActions.js


// Action to update user profile image
export const updateUserProfileImage = (userId, formData) => async (dispatch) => {
  try {
    const res = await axios.post(`/api/users/${userId}/profile-image`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    dispatch({
      type: UPDATE_PROFILE_IMAGE_SUCCESS,
      payload: res.data.profileImage, // Assuming the response contains the updated profile image URL
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_IMAGE_FAIL,
      payload: error.response.data.message, // Assuming the backend returns an error message
    });
  }
};
