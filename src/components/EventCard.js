import React from 'react';
import { Link } from 'react-router-dom';

function EventCard({ event }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={event.imageUrl} alt={event.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{event.name}</h2>
        <p className="text-gray-600">{event.date}</p>
        <p className="text-gray-700">{event.location}</p>
        <Link to={`/event/${event.id}`} className="mt-2 block text-blue-500 hover:text-blue-700">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default EventCard;