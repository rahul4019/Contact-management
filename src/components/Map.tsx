import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapData } from '../../types';

// Create a custom icon
const customIcon = icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/2776/2776067.png',
  iconSize: [32, 32],
});

interface MapProps {
  mapData: MapData;
}

const Map: React.FC<MapProps> = ({ mapData }) => {
  const position: [number, number] = [0, 0];
  return (
    <MapContainer center={position} zoom={2} className="h-[800px] w-full">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {mapData.map((item) => (
        <Marker
          position={[item.countryInfo.lat, item.countryInfo.long]}
          icon={customIcon}
        >
          <Popup>
            <p className="font-bold capitalize text-xl">{item.country}</p>
            <ul>
              <li className="text-blue-400 font-semibold">
                Active: {item.active}
              </li>
              <li className="text-red-400 font-semibold">
                Deaths: {item.deaths}
              </li>
              <li className="text-green-500 font-semibold">
                Recovered: {item.recovered}
              </li>
            </ul>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
