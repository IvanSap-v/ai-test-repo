import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EventService from '../services/EventService';
import BookingService from '../services/BookingService';

function EventDetails() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const data = await EventService.getEvent(eventId);
        setEvent(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error("Error fetching event:", error);
      }
    };

    fetchEvent();
  }, [eventId]);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleBookTickets = async () => {
    try {
      if (event) {
        const bookingData = {
          eventId: event.id,
          quantity: quantity,
          // Add user authentication/authorization here in a real application
        };
        const booking = await BookingService.createBooking(bookingData);
        navigate(`/confirmation/${booking.id}`);
      }
    } catch (error) {
      setError(error);
      console.error("Error creating booking:", error);
    }
  };

  if (loading) {
    return <div className="container mx-auto p-4">Loading event details...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-4">Error: {error.message}</div>;
  }

  if (!event) {
    return <div className="container mx-auto p-4">Event not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{event.name}</h1>
      <img src={event.imageUrl} alt={event.name} className="w-full h-64 object-cover mb-4" />
      <p className="text-gray-700">{event.description}</p>
      <p className="text-gray-500 mt-2">Date: {new Date(event.date).toLocaleDateString()}</p>
      <p className="text-gray-500 mt-2">Location: {event.location}</p>

      <div className="mt-4">
        <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold mb-2">
          Quantity:
        </label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          onClick={handleBookTickets}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Book Tickets
        </button>
      </div>
    </div>
  );
}

export default EventDetails;