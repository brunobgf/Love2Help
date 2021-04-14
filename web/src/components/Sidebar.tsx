import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import mapMarkerImg from '../images/mapMarkerImg.svg';

import '../styles/components/sidebar.css';

export default function Sidebar() {
    const { goBack} = useHistory();
    //it's for go back to the previous page

    return(
        <aside className="app-sidebar">
        <img src={mapMarkerImg} alt="Love2Help" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>
    );
}