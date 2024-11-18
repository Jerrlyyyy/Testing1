import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bestTime, setBestTime] = useState('');
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(''); // Track error message

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Start loading

    const formData = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      best_time: bestTime,
    };

    console.log('Data to submit:', formData);

    try {
      const response = await axios.post('http://localhost:8210/api/getdata', formData);
      console.log(response.data);
      alert('Data added successfully!');

      // Reset the form after successful submission
      setFirstName('');
      setLastName('');
      setPhoneNumber('');
      setBestTime('');
      setError(''); // Clear error state
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      setError('There was an error adding the data. Please try again.'); // Set error message
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="registration-card">
      <div className="card-header">
        <h2 className="card-title">Registration nyanya alert</h2>
      </div>
      <div className="card-content">
        {error && <div className="error-message">{error}</div>} {/* Display error message */}
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              id="phoneNumber"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Best Time to Call</label>
            <div className="radio-group">
              <div className="radio-option">
                <input
                  type="radio"
                  id="morning"
                  value="Morning"
                  checked={bestTime === 'Morning'}
                  onChange={(e) => setBestTime(e.target.value)}
                  required
                />
                <label htmlFor="morning">Morning</label>
              </div>
              <div className="radio-option">
                <input
                  type="radio"
                  id="afternoon"
                  value="Afternoon"
                  checked={bestTime === 'Afternoon'}
                  onChange={(e) => setBestTime(e.target.value)}
                  required
                />
                <label htmlFor="afternoon">Afternoon</label>
              </div>
            </div>
          </div>

          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
