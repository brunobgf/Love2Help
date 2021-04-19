import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload'
import InstitutionsController from './controllers/InstitutionsController'



const routes = Router();
const upload = multer(uploadConfig);

routes.get('/institutions', InstitutionsController.index);
routes.get('/institutions/:id', InstitutionsController.show);
routes.post('/institutions', upload.array('images'), InstitutionsController.create);


export default routes