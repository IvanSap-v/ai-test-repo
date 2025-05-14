import React from 'react';
import Hero from '../components/Hero';

function Home() {
  return (
    <div>
      <Hero title="Welcome to Dr. [Your Name]'s Office" subtitle="Your trusted partner in health." />
      <section style={{ padding: '2rem' }}>
        <h2>Our Services</h2>
        <p>We offer a wide range of general medical services including check-ups, vaccinations, and treatment for common illnesses.</p>
      </section>
    </div>
  );
}

export default Home;
```

```