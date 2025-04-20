import React, { useState } from 'react';
import centers from '../data/centers.json';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';

const MapSection = () => {
  const [filter, setFilter] = useState('All');

  const filteredCenters = filter === 'All'
    ? centers
    : centers.filter(center => center.type === filter);

  return (
    <section id="map" className="py-20 bg-white px-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-green-900">Find Recycling Centers</h2>
        <p className="text-green-700 mt-2">Click markers to see center names</p>
      </div>

      <div className="flex justify-center space-x-4 mb-4 flex-wrap">
        {['All', 'NGO', 'Government', 'Store'].map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-full font-medium ${
              filter === type
                ? 'bg-green-600 text-white'
                : 'bg-green-100 text-green-800 hover:bg-green-200'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="max-w-5xl mx-auto h-[400px]">
        <MapContainer
          center={[22.5937, 78.9629]} // Center of India
          zoom={4.5}
          scrollWheelZoom={false}
          className="h-full w-full rounded-lg shadow-md"
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filteredCenters.map(center => (
            <Marker key={center.id} position={[center.lat, center.lng]}>
              <Popup>
                <strong>{center.name}</strong><br />
                Type: {center.type}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default MapSection;

