import React, { Component } from 'react';
import { createArticle } from '../../services/article';

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
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const user = this.props.user;
    return (
      <div>
        {/* <figure>
          <img src={user.picture} alt={user.name} />
        </figure> */}

        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor="title">Título</label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Título"
            onChange={this.handleInputChange}
          />
          <label htmlFor="description">Descripción</label>
          <input
            id="description"
            name="description"
            type="text"
            placeholder="Descripción"
            onChange={this.handleInputChange}
          />
          <label htmlFor="website_url">URL Pagina web</label>
          <input
            id="website_url"
            name="website_url"
            type="text"
            placeholder="URL Pagina web"
            onChange={this.handleInputChange}
          />
          <label htmlFor="article">Artículo</label>
          <input
            id="article"
            name="article"
            type="text"
            placeholder="Artículo"
            onChange={this.handleInputChange}
          />
          <label htmlFor="category">Categoría</label>
          <input
            id="category"
            name="category"
            type="text"
            placeholder="Categoría"
            onChange={this.handleInputChange}
          />
          <label htmlFor="methodology">Metodología</label>
          <input
            id="methodology"
            name="methodology"
            type="text"
            placeholder="Metodología"
            onChange={this.handleInputChange}
          />
          <label htmlFor="picture_url">Imagen</label>
          <input
            type="file"
            id="picture_url"
            name="picture_url"
            onChange={this.handleFileInputChange}
          />
          <button>Crear!</button>
        </form>
      </div>
    );
  }
}

export default NewArticle;
