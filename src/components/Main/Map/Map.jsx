import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import { Icon } from "leaflet";
const position = [38.920396, -6.326384]
class Map extends Component {
  
  render() {
    return <div id="map">
    <MapContainer center={position} zoom={16}scrollWheelZoom={false}>
      <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
      <Popup>Calle De Los Transportes Nave 7. CP 06800 Mérida</Popup>
      <Tooltip>Estamos aquí</Tooltip>
    </Marker>
    </MapContainer>
    </div>;
  }
}

export default Map;
