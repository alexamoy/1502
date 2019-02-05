import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
export default class Login extends Component {
  render() {
    return (
      <div id='login-container'>
        <h1>Login</h1>
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label className='login-text' >Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label className='login-text'>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Button varian='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
