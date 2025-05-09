import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import BookingConfirmation from './pages/BookingConfirmation';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/:eventId" element={<EventDetails />} />
          <Route path="/confirmation/:bookingId" element={<BookingConfirmation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;