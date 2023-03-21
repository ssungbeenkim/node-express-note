import express from 'express';

const router = express.Router();

router.use((req, res, next) => {
  console.log('middleware for posts!');
  next();
});

// 라우터를 사용하여 상위 경로를 제외하고 사용 가능, app.js에서 흐름을 파악하기가 쉽다.
router.get('/', (req, res) => {
  res.status(201).send('GET: /posts');
});

router.post('/', (req, res) => {
  res.status(201).send('POST: /posts');
});

router.put('/:id', (req, res) => {
  res.status(201).send('PUT: /posts/:id');
});

router.delete('/:id', (req, res) => {
  res.status(201).send('DELETE: /posts/:id');
});

export default router;
