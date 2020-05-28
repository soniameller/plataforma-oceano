import axios from 'axios';

const instance = axios.create({
  baseURL: '/article',
});

const createArticle = (data) =>
  new Promise((resolve, reject) => {
    instance
      .post('/', data)
      .then((result) => {
        const article = result.data.article;
        resolve(article);
      })
      .catch(reject);
  });

export { createArticle };
