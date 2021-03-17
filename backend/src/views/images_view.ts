import Image from '../models/Image'

export default {
    //returns the Image in the way the front-end will see
    render(image: Image){
        return{
            id: image.id,
            url: `http://localhost:3333/uploads/${image.path}`,  
        };
    },

    renderMany(images: Image[]){
        return images.map(image => this.render(image));
    }
};