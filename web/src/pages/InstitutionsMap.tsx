import React from 'react';
import {MapContainer, TileLayer} from 'react-leaflet';

import mapMarkerImg from '../images/mapMarkerImg.svg'

import  '../styles/pages/institutions-map.css';

const InstitutionsMap = () => {
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

            <MapContainer
            // Array with longitude and latitude
                center = {[-19.9223924,-43.9419179]}
                zoom = {15}
                style = {{ width: '100%', height: '100%'}}
            >
                 <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                />
                

            </MapContainer>
        </div>
    )
}

export default InstitutionsMap;