import { Router } from 'express';

const routes = Router();

routes.get('/institutions')
routes.get('/institutions/:id')

export default routes 