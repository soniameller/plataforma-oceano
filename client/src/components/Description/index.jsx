import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';

import FormExample from '../FormExample';

import './style.scss';

export default function Description() {
  return (
    <div>
      <Container className="mt-5 mb-5">
        <h1 className="title">Recursos para clase</h1>
        <p>
          Esta sería una breve descripción de la pagina. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Perspiciatis quis molestiae accusantium facilis obcaecati vitae ipsam
          maxime, facere itaque, incidunt unde temporibus atque cupiditate! Blanditiis quisquam
          provident ad omnis voluptate!
        </p>
      </Container>
      <div className="images d-flex justify-content-center">
        <img src="https://source.unsplash.com/400x250/?ocean" alt="" srcset="" />
        <img src="https://source.unsplash.com/400x250/?water" alt="" srcset="" />
        <img src="https://source.unsplash.com/400x250/?nature,water" alt="" srcset="" />
        <img src="https://source.unsplash.com/400x250/?nature,ocean" alt="" srcset="" />
        <Container className="centered">
          <FormExample />
        </Container>
      </div>
    </div>
  );
}
