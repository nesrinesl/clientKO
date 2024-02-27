import React, { useEffect, useState } from 'react'
import { Button, Card, ListGroup, Modal, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';
import {   deleteRecipe, getOneRecipe } from '../../JS/Actions/RecipeAction';
import './DR.css'

const DetailsRecipe = () => {
  const dispatch=useDispatch()
    const navigate = useNavigate()
    const recipe = useSelector((state)=>state.recipeReducer.oneRecipe)
    const load = useSelector((state)=>state.recipeReducer.load)
    const match = useMatch('recipeDetails/:id')

      //delete model
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//edit model 
const [showEdit, setShowEdit] = useState(false);

const handleCloseEdit = () =>setShowEdit(false);
const handleShowEdit = () => setShowEdit(true);

useEffect(() => {
    dispatch(getOneRecipe(match.params.id))
}, [dispatch,match.params.id])

console.log(load)
  return (
    <div>
      {
        load? <div style={{display:'flex',justifyContent:'center'}} ><Spinner animation="border" variant="danger" /> </div>
        :
        <div style={{display:'flex',justifyContent:'center'}}>
           <Card style={{ width: '18rem', marginTop:100 }}>
        <Card.Img variant="top" src={recipe.profile_img} />
        <Card.Body>
          <Card.Title>{recipe.title}</Card.Title>
          {/* <Card.Title>{recipe.addedBy}</Card.Title> */}

        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Ingredients: {recipe.ingredients}</ListGroup.Item>
          <ListGroup.Item>Time: {recipe.time}</ListGroup.Item>
          <ListGroup.Item>Description: {recipe.description}</ListGroup.Item>
          <Button onClick={handleShowEdit} variant="outline-warning">
            Edit
          </Button>
          <Button onClick={handleShow}  variant="outline-danger">
            Delete
          </Button>
          
          <Button onClick={() => navigate(-1)} variant="outline-warning">
            back
          </Button>

        </ListGroup>
      </Card>


        </div>
      }
 {/* delete recipe */}
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
          <Modal.Title>Delete Recipe</Modal.Title>
         </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this {recipe.title} recipe? </Modal.Body>
         <Modal.Footer>
           <Button variant="secondary" onClick={handleClose}>
           Cancel
           </Button>
           <Button variant="danger" onClick={()=>dispatch(deleteRecipe(recipe._id))&&navigate(-1)}>
            Delete 
        </Button>
         </Modal.Footer>
       </Modal>

{/* edit recipe */}

       <Modal show={showEdit} onHide={handleCloseEdit}>
      <Modal.Header closeButton>
          <Modal.Title>Edit Recipe</Modal.Title>
         </Modal.Header>
        <Modal.Body>
          Are you sure you want to edit this {recipe.title} recipe?</Modal.Body>
         <Modal.Footer>
           <Button variant="secondary" onClick={handleCloseEdit}>
           Cancel
           </Button>
           <Button variant="danger" onClick={()=>navigate('/editRecipe')}>
            Edit 
        </Button>
         </Modal.Footer>
       </Modal>
    </div>
  )
}

export default DetailsRecipe