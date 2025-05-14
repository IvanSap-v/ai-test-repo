import React from 'react';
import Hero from '../components/Hero';
import styled from 'styled-components';

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormLabel = styled.label`
  margin-top: 10px;
  font-weight: bold;
`;

const FormInput = styled.input`
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const FormTextArea = styled.textarea`
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 150px;
`;

const FormButton = styled.button`
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function Contact() {
  return (
    <div>
      <Hero title="Contact Us" subtitle="Get in touch with our office." />
      <section style={{ padding: '2rem' }}>
        <ContactForm>
          <FormLabel htmlFor="name">Name:</FormLabel>
          <FormInput type="text" id="name" name="name" />

          <FormLabel htmlFor="email">Email:</FormLabel>
          <FormInput type="email" id="email" name="email" />

          <FormLabel htmlFor="message">Message:</FormLabel>
          <FormTextArea id="message" name="message" />

          <FormButton type="submit">Submit</FormButton>
        </ContactForm>
      </section>
    </div>
  );
}

export default Contact;
```

```