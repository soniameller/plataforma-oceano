import React, { Component } from 'react';
import { signUp } from '../../../services/authentication.js';
import { Form, Col, Button, Container } from 'react-bootstrap';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleFormSubmission(event) {
    event.preventDefault();

    const { name, email, password } = this.state;
    signUp({
      name,
      email,
      password,
    })
      .then((user) => {
        this.props.updateUserInformation(user);
        this.props.history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleFormSubmission}>
          <Form.Row>
            <Form.Group as={Col} md="3" controlId="name">
              <Form.Control
                required
                name="name"
                type="text"
                placeholder="Name"
                onChange={this.handleInputChange}
                defaultValue={this.state.name}
              />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="email">
              <Form.Control
                required
                name="email"
                type="email"
                placeholder="Email"
                onChange={this.handleInputChange}
                defaultValue={this.state.email}
              />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="password">
              <Form.Control
                required
                name="password"
                type="password"
                placeholder="Password"
                onChange={this.handleInputChange}
                defaultValue={this.state.password}
              />
            </Form.Group>

            {this.state.password && this.state.password.length < 8 && (
              <small>Password is too short!</small>
            )}
          </Form.Row>
          <Button type="submit" disabled={this.state.password.length < 6}>
            Sign Up
          </Button>
        </Form>
      </Container>
    );
  }
}

export default SignUp;
