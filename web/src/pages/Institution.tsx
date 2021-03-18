import {useState, useEffect} from "react";

import { useParams } from 'react-router-dom';

import api from "../services/api";
import Sidebar from "../components/Sidebar";




interface Institution {
    latitude: number;
    longitude: number;
    name: string;
    about: string;
    instructions: string;
    opening_hours: string;
    open_on_weekends: string;
    images: Array <{
        url: string;
        id: string;
    }>
}

interface InstitutionParams {
    id: string;
}

export default function Institution(){
    const params = useParams<InstitutionParams>();
    //api call
    //in this case different from orphanages map, will be institution on the singular
    const [ institution, setInstitution ] = useState<Institution>();
    const [activeImageIndex, setActiveIndexImage] = useState(0)
    //for changing the image that the user will click, we start on the index 0 

    useEffect(() => {

        api.get(`institutions/${params.id}`).then(response=>{
            setInstitution(response.data)
        });
    }, [params.id]);

    if(!institution) {
        return <p>Carregando...</p>
    }

    return(
        <div id="page-institution">
            <Sidebar />

            <main>
                <div className="institution-details">

                </div>
            </main>

        </div>
    )


}