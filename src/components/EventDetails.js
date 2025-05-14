import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EventService from '../services/EventService';

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    EventService.getEventById(id)
      .then(data => setEvent(data))
      .catch(error => console.error('Error fetching event:', error));
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={event.imageUrl} alt={event.name} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-2">{event.name}</h1>
          <p className="text-gray-600 mb-2">{event.date} at {event.location}</p>
          <p className="text-gray-700 mb-4">{event.description}</p>
          <p className="text-xl font-semibold">Price: ${event.price}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Buy Ticket
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;