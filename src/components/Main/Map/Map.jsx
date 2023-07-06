import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
const position = [40.415941, -3.688028]
class Map extends Component {
  
  render() {
    return <div id="map">
    <MapContainer center={position} zoom={16}scrollWheelZoom={false}>
      <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
      <Popup>Tu dirección</Popup>
      <Tooltip>Estamos aquí</Tooltip>
    </Marker>
    </MapContainer>
    </div>;
  }
}

export default Map;
