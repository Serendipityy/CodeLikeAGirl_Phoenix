import React, { useRef, useEffect, useState } from 'react';
//import * as c from 'handle_current_location.js'
import '../../styles/map.css';
//import '../../styles/redeem.css'
// import * as maptilersdk from '@maptiler/sdk';
// import { GeocodingControl } from '@maptiler/geocoding-control/maptilersdk';
// import '@maptiler/sdk/dist/maptiler-sdk.css';
// import '@maptiler/geocoding-control/style.css';

import * as maplibregl  from 'maplibre-gl';
// import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
import 'maplibre-gl/dist/maplibre-gl.css';
//import { geolocation } from '@maptiler/sdk';
var my_position = {
  lng: 0,
  lat: 0
};
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success);
} 
function success (pos) {
  my_position.lng = pos.coords.longitude;
  my_position.lat = pos.coords.latitude;
}
 

// function ResetCenterView(props) {
//   const { selectPosition } = props;
//   const map = useMap();

//   useEffect(() => {
//     if (selectPosition) {
//       map.setView(
//         L.latLng(selectPosition?.lat, selectPosition?.lon),
//         map.getZoom(),
//         {
//           animate: true
//         }
//       )
//     }
//   }, [selectPosition]);

//   return null;
// }

export default function Map(props) {

    const coordinates = useRef(null)
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(my_position.lng);
    const [lat] = useState(my_position.lat);
    const [zoom] = useState(8);
    const [API_KEY] = useState('lqle0iMYPhmDhZCBimBH');
    

    //const {selectPosition} = props;
    //const locationSelection = [selectPosition?.lat, selectPosition?.lon];

   
    useEffect(() => {
      
      if (map.current) return; // stops map from intializing more than once
      console.log(`Latitude : ${my_position.lat}`);
      console.log(`Longitude: ${my_position.lng}`);
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
        center: [lng, lat],
        zoom: zoom,
        //geolocate: maplibregl.GeolocateControl.current
      });

      // Add geolocate control to the map.
      map.current.addControl(
        new maplibregl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        })
      );
      // Add zoom and rotation controls to the map.
      map.current.addControl(new maplibregl.NavigationControl());
      // Add marker 
      const marker = new maplibregl.Marker({draggable: true})
      .setLngLat([lng, lat]) // set initial maker is current location 
      .addTo(map.current);  

     function onDragEnd() {
          const lngLat = marker.getLngLat();
          // show coordinates to check ==> this is accurate 
            console.log(`Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`)  ;

          // something to show location (maybe lng-lat or address)choosed in location bar
          //....


    }

      marker.on('dragend', onDragEnd);
      // The `click` event is an example of a `MapMouseEvent`.
      // Set up an event listener on the map.
      map.current.on('click', function(e) {
        // The event object (e) contains information like the
        // coordinates of the point on the map that was clicked.
        console.log('A click event has occurred at ' + e.lngLat);
        
      });

      
    }, [API_KEY, lng, lat, zoom]);
    
    return (
      <>
      <div className="map-wrap">
        <div ref={mapContainer} className="map" />
        <pre ref= {coordinates} ></pre>
        {/* <ResetCenterView selectPosition={selectPosition}/> */}
      </div>
      </>
    );

  }


