const { Router } = require('express');
const Article = require('./../models/article');

const router = new Router();

router.post('/', (req, res, next) => {
  const { title, description, picture_url, website_url, article, category, methodology } = req.body;
  Article.create({
    title,
    description,
    picture_url,
    website_url,
    article,
    category,
    methodology,
  })
    .then((data) => {
      res.json({ data });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
