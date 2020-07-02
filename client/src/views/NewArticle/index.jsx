import './style.scss';
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { createArticle } from '../../services/article';
import Button from 'react-bootstrap/Button';

class NewArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      picture_url: '',
      website_url: '',
      article: '',
      category: '',
      methodology: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.handleFileInputChange = this.handleFileInputChange.bind(this);
  }

  async handleFormSubmission(event) {
    event.preventDefault();
    const {
      title,
      description,
      picture_url,
      website_url,
      article,
      category,
      methodology,
    } = this.state;
    try {
      const newArticle = await createArticle({
        title,
        description,
        picture_url,
        website_url,
        article,
        category,
        methodology,
      });
      this.props.history.push('/');
    } catch (error) {
      console.log(error);
    }
  }

  handleFileInputChange(event) {
    const { name, files } = event.target;
    this.setState({
      [name]: files[0],
    });
  }

  handleInputChange(event) {
    //TODO - Fix the form to make this work
    console.log('event.target.name', event.target.name);
    console.log('event.target.value', event.target.value);
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="article">
        <Form className="article__form" onSubmit={this.handleFormSubmission}>
          <Form.Group controlId="title">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Título"
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="website_url">
            <Form.Label>URL Pagina web</Form.Label>
            <Form.Control
              name="website_url"
              type="url"
              placeholder="URL Pagina web"
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              name="description"
              placeholder="Breve descripción del artículo..."
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="article">
            <Form.Label>Artículo</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              name="article"
              placeholder="Artículo completo..."
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="category">
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              as="select"
              name="category"
              defaultValue="default"
              onChange={this.handleInputChange}
            >
              <option value="default" disabled>
                Selecciona una categoría
              </option>

              <option value="none">Sin categoría específica</option>
              <option value="primary">Primaria</option>
              <option value="secondary">Segundaria</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="methodology">
            <Form.Label>Metodología</Form.Label>
            <Form.Control
              as="select"
              defaultValue="default"
              name="methodology"
              onChange={this.handleInputChange}
            >
              <option value="default" disabled>
                Selecciona una metodología
              </option>
              <option value="none">Sin metodología específica</option>
              <option value="article">Artículo</option>
              <option value="collection">Colección</option>
              <option value="infographic">Infografía</option>
              <option value="lesson">Lección</option>
              <option value="map">Mapa</option>
              <option value="photograph">Fotografía</option>
              <option value="unit">Unidad</option>
              <option value="video">Video</option>
            </Form.Control>
          </Form.Group>
          <Button>Crear</Button>
        </Form>
      </div>
    );
  }
}

export default NewArticle;
