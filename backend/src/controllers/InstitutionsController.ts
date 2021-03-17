import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Institution from '../models/Institution';
import institutionView from '../views/institutions_view';
import * as Yup from 'yup';


export default {

    async index(request: Request, response:Response) {
        const institutionsRepository = getRepository(Institution);

        const institutions = await institutionsRepository.find({
            relations: ['images']
        });

        return response.json(institutionView.renderMany(institutions));

    },

    async show(request: Request, response:Response){
        const { id } = request.params;

        const institutionsRepository = getRepository(Institution);

        const institution = await institutionsRepository.findOneOrFail(id, {
            relations: ['images']
        });

        return response.json(institutionView.render(institution));

    },

    async create (request:Request, response: Response) {
         //destructuring the request.body 

        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
        } = request.body;
        
        const institutionsRepository = getRepository(Institution)

        const requestImages = request.files as Express.Multer.File[];
        //this makes the program understand that this is an array

        const images = requestImages.map(image => {
            return {path: image.filename}
        })

        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends: open_on_weekends === 'true',
            images,
        }

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(
                Yup.object().shape({
                path: Yup.string().required()
              })
            )
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        //this method creates an institution 
    const institution = institutionsRepository.create(data);

    //this method saves the institution on the databases
    await institutionsRepository.save(institution)

    return response.status(201).json(institution)

    }
};