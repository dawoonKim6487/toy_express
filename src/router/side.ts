import { Request, Response, Router } from 'express';
const router = Router();

router.get('/', (req: Request, res: Response) => {
  const { body } = req;
  res.json({
    ...body
  })
});


module.exports = router;
