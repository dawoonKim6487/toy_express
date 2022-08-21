import express, { Request, Response, NextFunction } from 'express';
const app = express();
const side = require('./router/side');
const morgan = require('morgan');
const cors = require('cors');

const createSever = async () => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  if (process.env.NODE_ENV === 'production') {
    app.use(morgan('combined')); // 배포환경이면
  } else {
    app.use(morgan('dev')); // 개발환경이면
  }

  app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('welcome!');
  });

  app.use('/side', side);
}


module.exports = createSever().then(() => {
  app.listen('4000', () => {
    console.log(`
  🛡️  Server listening on port: 4000
  `);
  });
})
