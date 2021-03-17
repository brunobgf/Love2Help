import Institution from '../models/Institution';
import imagesView from './images_view'

export default {
    //returns the institution  in the way the front-end will see
    render (institution: Institution){
        return{
            id: institution.id,
            name: institution.name,
            latitude: institution.latitude,
            longitude: institution.longitude,
            about: institution.about,
            instructions: institution.instructions,
            opening_hours: institution.opening_hours,
            open_on_weekends: institution.open_on_weekends,
            images: imagesView.renderMany(institution.images),

        };
    },

    renderMany(institutions:Institution[]){
        return institutions.map(institution => this.render(institution));

    }
};
