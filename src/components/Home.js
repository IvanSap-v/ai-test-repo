import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import EventService from '../services/EventService';

function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from the API or local storage
    EventService.getAllEvents()
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default Home;