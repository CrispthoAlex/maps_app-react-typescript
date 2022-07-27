import React from 'react';
import ReactDOM from 'react-dom/client';
import MapsApp from './MapsApp';

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

