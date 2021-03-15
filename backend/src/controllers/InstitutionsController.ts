import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Institution from '../models/Institution';


export default {

    async index (request:Request, response: Response) {

        const institutionsRepository = getRepository(Institution)
        
    }
    
}