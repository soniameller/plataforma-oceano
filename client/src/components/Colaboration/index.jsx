import React, { Component } from 'react';
import './style.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Colaboration extends Component {
  render() {
    return (
      <div className="parallex ">
        <div className="bg--white">
          <p>
            {' '}
            Construyamos este espacio entre tod@s! <br /> Tenés ideas para sumar a la colección?
            Mandanos el link.
          </p>
          <Form className="d-flex">
            <Form.Control placeholder="Pega aca el link de la pagina..." />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
