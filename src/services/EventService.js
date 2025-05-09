import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'; // Replace with your actual API endpoint

const EventService = {
  getEvents: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/events`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getEvent: async (eventId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/events/${eventId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default EventService;