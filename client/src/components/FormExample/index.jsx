import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export default function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="3" controlId="validationCustom01">
          <Form.Control required type="text" placeholder="Busca por palabra..." defaultValue="" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom03">
          <select className="custom-select">
            <option defaultValue>Todas las metodologías</option>
            <option value="1">Articulo</option>
            <option value="2">Video</option>
            <option value="3">Mapa</option>
            <option value="4">Etc</option>
          </select>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom03">
          <select className="custom-select">
            <option defaultValue>Todas las etiquetas</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom03">
          <select className="custom-select">
            <option defaultValue>Todas las categorías</option>
            <option value="1">Primaria</option>
            <option value="2">Secundaria</option>
            <option value="3">Sin nivel específico</option>
          </select>
        </Form.Group>
      </Form.Row>

      <Form.Group>
        <Form.Check type="switch" id="custom-switch" label="Incluir artículos en inglés" />
      </Form.Group>
      <Button type="submit">Buscar</Button>
    </Form>
  );
}
