import React from 'react';
import Hero from '../components/Hero';

function About() {
  return (
    <div>
      <Hero title="About Dr. [Your Name]" subtitle="Dedicated to providing compassionate care." />
      <section style={{ padding: '2rem' }}>
        <h2>Background</h2>
        <p>Dr. [Your Name] has been practicing medicine for [Number] years and is board-certified in [Specialty].</p>
        <h2>Experience</h2>
        <p>Dr. [Your Name] has extensive experience in diagnosing and treating a wide range of medical conditions.</p>
      </section>
    </div>
  );
}

export default About;
```

```