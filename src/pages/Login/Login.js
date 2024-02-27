import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../JS/Actions/AuthAction'

const Login = () => {
const navigate=useNavigate()
const dispatch = useDispatch()

const [user,setUser]=useState({})

const handleChange = (e)=>{
  setUser({...user,[e.target.name]:e.target.value})
}
const handleLogin=()=>{
  dispatch(login(user,navigate))
}
console.log(user)


  return (
    <div><Container style={{marginTop:200}}>
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label style={{color:'white'}}>Email address</Form.Label>
          <Form.Control  name="email" type="email" onChange={(e)=>handleChange(e)} placeholder="Enter your Email" />
          <Form.Text className="text-muted">
          
          </Form.Text>
        </Form.Group>
    
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label  style={{color:'white'}}>Password</Form.Label>
          <Form.Control   name="password" onChange={(e)=>handleChange(e)} type="password" placeholder="Entre your Password" />
        </Form.Group>
        <Button onClick={()=>handleLogin()}  variant="success">
      Submit
    </Button>

        
      </Form>
    </Container></div>
  )
}

export default Login