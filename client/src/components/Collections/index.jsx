import React, { Component } from 'react';
import Card from './../Card';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import './style.scss';

export default class Collections extends Component {
  render() {
    return (
      <CardDeck>
        <Card src="https://source.unsplash.com/200x200/?ocean" />
        <Card src="https://source.unsplash.com/200x200/?water" />
        <Card src="https://source.unsplash.com/200x200/?surf" />
        <Card src="https://source.unsplash.com/200x200/?nature" />
        <Card src="https://source.unsplash.com/200x200/?whale" />
        <Card src="https://source.unsplash.com/200x200/?tree" />
        <Card src="https://source.unsplash.com/200x200/?wave" />
        <Card src="https://source.unsplash.com/200x200/?van" />
      </CardDeck>
    );
  }
}
