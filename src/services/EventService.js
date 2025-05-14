//  Simulates an API call to get event data.  In a real application, this would make a fetch/axios request to a backend API.

const events = [
  {
    id: 1,
    name: 'React Conf',
    date: '2024-04-20',
    location: 'San Francisco, CA',
    description: 'The official React conference.',
    price: 199,
    imageUrl: 'https://via.placeholder.com/400x200?text=React+Conf'
  },
  {
    id: 2,
    name: 'VueJS Amsterdam',
    date: '2024-06-15',
    location: 'Amsterdam, Netherlands',
    description: 'The largest VueJS conference in the world.',
    price: 249,
    imageUrl: 'https://via.placeholder.com/400x200?text=VueJS+Amsterdam'
  },
  {
    id: 3,
    name: 'AngularConnect',
    date: '2024-10-05',
    location: 'London, UK',
    description: 'The premier Angular conference in Europe.',
    price: 299,
    imageUrl: 'https://via.placeholder.com/400x200?text=AngularConnect'
  }
];

const EventService = {
  getAllEvents: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(events);
      }, 500); // Simulate network latency
    });
  },
  getEventById: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const event = events.find(event => event.id === parseInt(id));
        if (event) {
          resolve(event);
        } else {
          reject('Event not found');
        }
      }, 500); // Simulate network latency
    });
  }
};

export default EventService;