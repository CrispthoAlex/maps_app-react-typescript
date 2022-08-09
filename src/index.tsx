import React from 'react';
import ReactDOM from 'react-dom/client';
import MapsApp from './MapsApp';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

// Access token
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleGFuZGVycm0iLCJhIjoiY2w2bGRmcmU2MGFyejNibXJmZng5c3FyaiJ9.frTo33PmfDrMLmRqCPsHzw'

// Check using Geolocation
if ( !navigator.geolocation ) {
  alert('Geolocation is not available');
  throw new Error('Geolocation is not available');
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);

