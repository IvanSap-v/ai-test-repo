import React from 'react';
import styled from 'styled-components';

const ContactPageContainer = styled.div`
  padding: 20px;
`;

const ContactPageTitle = styled.h2`
  font-size: 2em;
  color: #007bff;
`;

const ContactForm = styled.form`
  margin-top: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContactPage = () => {
  return (
    <ContactPageContainer>
      <ContactPageTitle>Contact Us</ContactPageTitle>
      <ContactForm>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input type="text" id="name" name="name" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" name="email" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message:</Label>
          <Textarea id="message" name="message" rows="4"></Textarea>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </ContactForm>
    </ContactPageContainer>
  );
};

export default ContactPage;