import express from 'express';

const app = express();

app.use(express.json());

app
  .route('/posts') // 어떤 경로에 대해 처리를 해줄 것인지 지정
  .get((req, res) => {
    res.status(201).send('GET: /posts');
  })
  .post((req, res) => {
    // chainning 가능하고, 할 때는 경로 지정할 필요 없음.
    res.status(201).send('POST: /posts');
  });

app
  .route('/posts/:id')
  .put((req, res) => {
    res.status(201).send('PUT: /posts/:id');
  })
  .delete((req, res) => {
    res.status(201).send('DELETE: /posts/:id');
  });

app.listen(8080);
// 나름 깔끔해 졌지만,,
// 조금 복잡한 서버는 여러 경로에 대해 처리를 해주어야 하므로 이렇게 전부다 나열하는 것은
// 가독성, 유지보수, 모듈성 측면에서 떨어진다.
