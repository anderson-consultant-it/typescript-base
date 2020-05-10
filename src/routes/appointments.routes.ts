import { Router } from 'express';

const appointmentsRouter = Router();

appointmentsRouter.post('/', (req, res) => {
  return res.json({});
});

export default appointmentsRouter;
