import React, { useState } from "react";
import { Container, Form, Image } from "react-bootstrap";
import { useDispatch } from 'react-redux'
import { register } from "../../JS/Actions/AuthAction";
import { useNavigate } from 'react-router-dom'
import './Register.css';
const Register = () => {
  const navigate =useNavigate()
   const dispatch = useDispatch()
  const [newUser, setNewUser] = useState({});

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

   const handleRegister = () => {
     dispatch(register(newUser,navigate))
   }

  console.log(newUser);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          style={{
            margin: 100,
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Image
            height={600}
            width={250}
            src="https://i.pinimg.com/originals/f8/25/0c/f8250c18080777926c76c90f9d02ec7e.png"
          />
          <div style={{ margin: 40 }}>
            <h3 style={{ textAlign: "center",color:"red" }}>Discover new Recipes</h3>
            <p style={{ textAlign: "center", color:"white", fontSize: 20 }}>
              Join us on this delicious journey as we explore the art of
              cooking,<br></br> celebrate the joy of sharing meals with loved
              ones,<br></br> and savor every moment spent in the kitchen.
              <br></br> Whether you're whipping up a quick breakfast, hosting a
              dinner party, or experimenting with new flavors,<br></br> let
              KOJINTY be your trusted companion every step of the way.
            </p>
          </div>
        </div>

        <Container style={{ marginTop: 200 }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label
               className="bold-red-label">Name</Form.Label>
              <Form.Control className="black-border" name="name" onChange={(e) => handleChange(e)} type="text" placeholder="Enter your Name"/>
              
              <Form.Label  className="bold-red-label">Last Name</Form.Label>
              <Form.Control className="black-border" name="lastName"  onChange={(e) => handleChange(e)} type="text"  placeholder="Enter your Last Name "/>
        
              <Form.Label   className="bold-red-label">Email address</Form.Label>
              <Form.Control className="black-border" name="email" type="email" onChange={(e) => handleChange(e)}  placeholder="@gmail.com"  />
                
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label  className="bold-red-label">Password</Form.Label>
              <Form.Control className="black-border"
                name="password"
                onChange={(e) => handleChange(e)}
                type="password"
                placeholder="Entre your Password"
              />
              
              We'll never share your password with anyone else.
            </Form.Group>
          </Form>
          <button  onClick={() => handleRegister()}  class="submitBtn">
  Submit
  <svg fill="white" viewBox="0 0 448 512" height="1em" class="arrow"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
</button>
        </Container>
      </div>
    </div>
  );
};

export default Register;
