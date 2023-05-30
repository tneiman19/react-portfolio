import React, { useState } from 'react';
import "../styles/Form.css";

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [emailError, setEmailError] = useState('');
  const [textError, setTextError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError('Email is required');
    } else {
      setEmailError('');
    }

    if (!text) {
      setTextError('Text is required');
    } else {
      setTextError('');
    }

    // Additional logic for form submission
    // ...
  };

  return (
    <div className="form-container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
          className='block'
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
          className='block'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => {
              if (!email) {
                setEmailError('Email is required');
              } else {
                setEmailError('');
              }
            }}
          />
          {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
        </div>
        <div>
          <label htmlFor="text">Text:</label>
          <textarea
          className='block'
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onBlur={() => {
              if (!text) {
                setTextError('Text is required');
              } else {
                setTextError('');
              }
            }}
          ></textarea>
          {textError && <span style={{ color: 'red' }}>{textError}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
