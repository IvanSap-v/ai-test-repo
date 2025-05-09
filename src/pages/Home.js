import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import EventService from '../services/EventService'; // Import the EventService

function Home() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await EventService.getEvents(); // Use the EventService
        setEvents(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <div className="container mx-auto p-4">Loading events...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-4">Error: {error.message}</div>;
  }

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