'use client';

import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// marker icon from public
const markerIcon = new L.Icon({
  iconUrl: '/marker.png',
  iconSize: [32, 32],
  iconAnchor: [16, 48], // نوک مارکر
});

function LocationMarker({ value, onChange }) {
  useMapEvents({
    click(e) {
      onChange(e.latlng);
    },
  });

  return value ? <Marker position={value} icon={markerIcon} /> : null;
}

export default function Map({ value, onChange }) {
  return (
    <div className="w-full h-64 rounded-lg overflow-hidden border border-neutral-200 z-10">
      <MapContainer
        center={[35.6892, 51.389]} // Tehran
        zoom={13}
        className="w-full h-full"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMarker value={value} onChange={onChange} />
      </MapContainer>
    </div>
  );
}
