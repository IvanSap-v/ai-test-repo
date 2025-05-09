import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'; // Replace with your actual API endpoint

const BookingService = {
  createBooking: async (bookingData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/bookings`, bookingData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getBooking: async (bookingId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/bookings/${bookingId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default BookingService;