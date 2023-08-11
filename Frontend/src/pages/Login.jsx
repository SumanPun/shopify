import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { TextField, Button } from '@material-ui/core'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");

  return <Container>
    <Row className="justify-content-md-center">
      <Col xs={12} md={6}>
        <h1 className='mb-4'>Sign In</h1>

        <Form>
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
            autoFocus
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
            autoComplete="email"
            onChange={(e)=> {
              setPassword(e.target.value)
            }}
          />

          <Button type='submit' variant='outlined' color='primary' fullWidth>
            Login
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
}

export default Login