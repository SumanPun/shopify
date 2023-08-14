import { Button, CircularProgress, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { Col, Container, Row, Form } from 'react-bootstrap'
import { errorToast, successToast, warningToast } from '../service/toastify.service'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Signup = () => {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [confirmPasswood, setConfirmPassword] = useState("")

  const navigate = useNavigate();

  const registerHandler = async(e) => {
    e.preventDefault();
   
    try {
      setLoading(true);

      if(confirmPasswood !== password) {
        warningToast("Confirm Password and Password must be same");
      } else{
        const { data } = await axios.post(import.meta.env.VITE_SERVER_URL + "/api/v1/auth/register", {
          name, email, password
        });
        if(data.status) {
          navigate("/");
          successToast(data.message);
        }
        setLoading(false);
      }
    } catch ({response}) {
      errorToast(response.data.error);
      setLoading(false);
    }
    
  }

  return <Container>
    <Row className='justify-content-md-center'>
      <Col xs={12} md={6}>
        <h1 className='mb-4'>Signup</h1>
        <Form onSubmit={registerHandler}>
          <TextField className='mb-4'
            variant='outlined'
            type='text'
            fullWidth
            placeholder='John Doe'
            required
            margin='normal'
            label='Full Name'
            id='name'
            name='name'
            autoFocus
            onChange={(e)=> {
              setName(e.target.value);
            }}
          />
           <TextField 
            variant="outlined"
            type="email"
            placeholder="abc@gmail.com"
            required
            fullWidth
            id="email"
            name="email"
            label="Email Address"
            autoComplete="email"
            className='mb-2'
            onChange={(e)=> {
              setEmail(e.target.value)
            }}
          />
           <TextField 
            variant="outlined"
            type="password"
            placeholder="********"
            required
            className='mb-2'
            fullWidth
            id="password"
            name="password"
            label="Password"
            margin='normal'
            autoComplete="password"
            onChange={(e)=> {
              setPassword(e.target.value)
            }}
          />
          <TextField 
            variant="outlined"
            type="confirmPassword"
            placeholder="********"
            required
            className='mb-2'
            fullWidth
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            margin='normal'
            autoComplete="confirmPassword"
            onChange={(e)=> {
              setConfirmPassword(e.target.value)
            }}
          />
          <Button type='submit' className='mb-1' variant='contained' color='primary' fullWidth disabled={loading}>
            {loading ? <CircularProgress color='inherit'/> : <>Sign up</>}
          </Button>
        </Form>

        <Row>
          <Col>
            Already Register?
            <Link to={"/login"}>Login</Link>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
}

export default Signup