import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-lg font-bold">TicketMaster Lite</Link>
        <div>
          <Link to="/" className="px-4 hover:text-gray-300">Home</Link>
          {/* Add more navigation links here, e.g., "My Tickets", "Contact" */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;