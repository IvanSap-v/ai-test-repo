import React from 'react';
import Hero from '../components/Hero';
import AppointmentCard from '../components/AppointmentCard';

function Appointments() {
  // This is a placeholder page.  In a real application, this would
  // fetch appointment data from an API or database.
  const appointments = [
    { title: 'Check-up Appointment', description: 'Routine check-up with Dr. [Your Name]' },
    { title: 'Follow-up Consultation', description: 'Follow-up appointment to discuss your treatment plan.' },
  ];

  return (
    <div>
      <Hero title="Appointments" subtitle="Schedule your appointment today." />
      <section style={{ padding: '2rem' }}>
        {appointments.map((appointment, index) => (
          <AppointmentCard key={index} title={appointment.title} description={appointment.description} />
        ))}
      </section>
    </div>
  );
}

export default Appointments;
```

```