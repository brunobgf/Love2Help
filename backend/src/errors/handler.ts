import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';


interface ValidationErrors {
    [key: string]: string[];
}

//errorHandler will inherit propertires from ErrorRequestHandler method from express 

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
    if (error instanceof ValidationError) {
        let errors: ValidationErrors = {};

        error.inner.forEach(err =>{
            errors[err.path!] = err.errors;
        });

        return response.status(500).json({ message: 'Validation fails', errors });
    }


    console.error(error);

    return response.status(500).json({ message: 'Internal server error' });
};

export default errorHandler;