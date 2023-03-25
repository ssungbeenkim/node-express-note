import express from 'express';
import { param, body, validationResult } from 'express-validator';

const app = express();
app.use(express.json());

const validate = (req, res, next) => {
  const errors = validationResult(req); // 에러가 있다면 비어있지 않다.
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ message: errors.array()[0].msg }); // 첫번째 메세지만 받고싶음
};

app.post(
  '/users',
  [
    body('name')
      .trim()
      .isLength({ min: 2 })
      .withMessage('이름은 두글자 이상!!'),
    body('age').notEmpty().isInt().withMessage('숫자 입력해'),
    body('job.name').notEmpty(),
    validate,
  ],
  (req, res, next) => {
    console.log(req.body);
    res.sendStatus(201);
  }
);

app.get(
  '/:email',
  [
    param('email')
      .isEmail()
      .withMessage('이메일을 잘 입력해여')
      .normalizeEmail(),
    validate,
  ],
  (req, res, next) => {
    res.send('🍒');
  }
);

app.listen(8080);

// validation 과 san
