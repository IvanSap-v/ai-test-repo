import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookingService from '../services/BookingService';

function BookingConfirmation() {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const data = await BookingService.getBooking(bookingId);
        setBooking(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error("Error fetching booking:", error);
      }
    };

    fetchBooking();
  }, [bookingId]);

  if (loading) {
    return <div className="container mx-auto p-4">Loading booking confirmation...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-4">Error: {error.message}</div>;
  }

  if (!booking) {
    return <div className="container mx-auto p-4">Booking not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Booking Confirmation</h1>
      <p>Thank you for your booking!</p>
      <p>Booking ID: {booking.id}</p>
      <p>Event: {booking.event.name}</p>
      <p>Quantity: {booking.quantity}</p>
      <p>Total Price: ${booking.totalPrice}</p>
    </div>
  );
}

export default BookingConfirmation;