import { Map } from 'mapbox-gl';
import React, { useContext, useLayoutEffect, useRef } from 'react';
import { PlacesContext } from '../context';
import { Loading } from './';

export const MapView = () => {

  const { isLoading, userLocation } = useContext(PlacesContext);
  // Allow refer to map element without re-render
  const mapDiv = useRef<HTMLDivElement>(null);


  useLayoutEffect(() => {
    if(!isLoading) {
      const map = new Map({
        container: mapDiv.current!, // container element
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: userLocation, // User starting position [lng, lat]
        zoom: 14, // starting zoom
        // projection: 'globe' // display the map as a 3D globe
      });
    } 
  }, [isLoading]);


  if (isLoading){ return ( <Loading /> ); }

  return (
    <div ref={ mapDiv }
      style={{
        height: '100vh',
        left:0,
        position:'fixed',
        top: 0,
        width: '100vh'
      }}
    >
      <h2>MapView: Geolocation</h2>
      <p>{userLocation?.join(',')}</p>
    </div>
  )
}
