import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import AddRecipe from "./pages/AddRecipe/AddRecipe";
import DetailsRecipe from "./pages/DetailsRecipe/DetailsRecipe";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import MyRecipes from "./pages/MyRecipes/MyRecipes";
import { Routes, Route } from 'react-router-dom';
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import { useDispatch, useSelector } from "react-redux";
import { current } from "./JS/Actions/AuthAction";
import { useEffect } from "react";
import EditRecipe from "./pages/EditRecipe/EditRecipe";
import SuccessNotification from "./components/SuccessNotification/SuccessNotification";
import ErrorNotification from "./components/ErrorNotification/ErrorNotification";

function App() {

  const usersuccess = useSelector((state) => state.AuthReducer.success);
  const erroruser = useSelector((state) => {
    const errors = state.AuthReducer.errors;
    return Array.isArray(errors) ? errors : [];
  });
  
  const isAuth = useSelector((state)=>state.AuthReducer.isAuth)
  const dispatch=useDispatch()

  useEffect(() => {
   dispatch(current())
  }, [dispatch])
  
  console.log(isAuth)
  return (
    <div className="App">

{usersuccess && usersuccess.map((el) => <SuccessNotification success={el}/>)}
{erroruser.map((el) => <ErrorNotification error={el} key={el.id} /> )}


      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/myrecipes' element={<MyRecipes />} />
        <Route path='/recipeDetails/:id' element={<DetailsRecipe />} />
        <Route path='/addRecipe' element={<AddRecipe/>} />

        {!isAuth? <Route path='/register' element={<Register/>} />:null}
        <Route path='/login' element={<Login/>} />
        {isAuth? <Route path='/profile' element={<Profile/>}/>:null }
        <Route path='/editRecipe' element={<EditRecipe/>} />

        <Route path='/*' element={<ErrorPage />} />

      
      </Routes>
    </div>
  );
}

export default App;
