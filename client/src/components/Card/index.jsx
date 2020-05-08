import React, { Component } from 'react';
import './style.scss';
import Card from 'react-bootstrap/Card';

export default class index extends Component {
  render() {
    return (
      <Card>
        <a href="#">
          <Card.Img variant="top" src={this.props.src} />
        </a>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
