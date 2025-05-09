import React from 'react';
import { Link } from 'react-router-dom';

function EventCard({ event }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={event.imageUrl} alt={event.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{event.name}</h2>
        <p className="text-gray-700">{event.description.substring(0, 100)}...</p>
        <p className="text-gray-500 mt-2">Date: {new Date(event.date).toLocaleDateString()}</p>
        <Link to={`/event/${event.id}`} className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default EventCard;