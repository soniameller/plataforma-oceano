import React, { Component } from 'react';
import { signIn } from './../../../services/authentication';
import { Link } from 'react-router-dom';
import { Form, Col, Button, Container } from 'react-bootstrap';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  async handleFormSubmission(event) {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      const user = await signIn({
        email,
        password,
      });
      this.props.updateUserInformation(user);
      this.props.history.push('/');
    } catch (error) {
      console.log(error);
    }
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
            <Form.Group as={Col} md="3" controlId="email">
              <Form.Control
                required
                name="email"
                type="email"
                placeholder="email"
                onChange={this.handleInputChange}
                defaultValue={this.state.email}
              />
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="password">
              <Form.Control
                required
                name="password"
                type="password"
                placeholder="password"
                onChange={this.handleInputChange}
                defaultValue={this.state.password}
              />
            </Form.Group>
            {/* <Form.Text className="text-muted">
              En el futuro tendremos mensajes cuando pones mal la info
            </Form.Text> */}
          </Form.Row>
          <Button className="mr-1" type="submit">
            Ingresá
          </Button>
          <Button type="submit">
            <a
              className="btn-primary"
              href="https://plataforma-oceano.herokuapp.com/authentication/google"
            >
              Ingresá con Google
            </a>
          </Button>
        </Form>

        <p>Todavía no tenes una cuenta?</p>
        <Link to="/signup">Signup</Link>
      </Container>
    );
  }
}

export default SignIn;
