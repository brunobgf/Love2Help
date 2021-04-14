import React, {useEffect, useState} from 'react';
//state are any type of information that will be changed/manipulated in the component,  if the component will change this variable we'll need the state
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';

import mapMarkerImg from '../images/mapMarkerImg.svg'

import  '../styles/pages/institutions-map.css';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';

//institution doesn't know the data type of the variables, so we need to create this interface
interface Institution {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

const InstitutionsMap = () => {
    const [institutions, setInstitutions] = useState<Institution[]>([])
    //<Institution> = it's a typing parameter, says that Institution is a vector Institution configuration

    //useEffect receives two parameters, it will exercute the function {} when [] changes
    //if the [] is empty this function will execute only one time for showing some data on the screen
    useEffect(()=>{
        api.get('institution').then(response=>{
            setInstitutions(response.data)
             //the variabl orphanages will have the value returned by response.data 
        });
    },[]);
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Love2Help"/>
                    <h2>Escolha uma instituição no mapa</h2>
                    <p>Muitas pessoas estão esperando pela sua doação ou visita! :)</p>
                </header>

                <footer>
                    <strong>Belo Horizonte</strong>
                    <span>Minas Gerais</span>
                </footer>

            </aside>

            <Map
            // Array with longitude and latitude
                center = {[-19.9223924,-43.9419179]}
                zoom = {15}
                style = {{ width: '100%', height: '100%'}}
            >
                 <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                />
                {institutions.map(institution=>{
                    return(
                        <Marker
                        icon = {mapIcon}
                        position={[institution.latitude, institution.longitude]}
                        key={institution.id}
                        >
                            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                                {institution.name}
                                <Link to={`/institutions/${institution.id}`}>
                                    <FiArrowRight size={20} color="#FFF" />
                                </Link>
                            </Popup>
                        </Marker>
                    )
                })}
            </Map>
            <Link to="/institutions/create" className="create-institution">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default InstitutionsMap;