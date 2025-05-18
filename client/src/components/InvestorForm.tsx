import React from 'react';
import './InvestorForm.css';

const InvestorForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className='investor-form-container'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='firstName'>First Name</label>
          <input name='firstName' id='firstName' required />
        </div>

        <div className='form-group'>
          <label htmlFor='lastName'>Last Name</label>
          <input name='lastName' id='lastName' required />
        </div>

        <div className='form-group'>
          <label htmlFor='dob'>Date of Birth</label>
          <input type='date' name='dob' id='dob' required />
        </div>

        <div className='form-group'>
          <label htmlFor='phone'>Phone Number</label>
          <input type='tel' name='phone' id='phone' required />
        </div>

        <div className='form-group'>
          <label htmlFor='address'>Street Address</label>
          <input name='address' id='address' required />
        </div>

        <div className='form-group'>
          <label htmlFor='state'>State</label>
          <input name='state' id='state' required />
        </div>

        <div className='form-group'>
          <label htmlFor='zip'>ZIP Code</label>
          <input name='zip' id='zip' required />
        </div>

        <div className='form-group'>
          <label htmlFor='file'>Upload File</label>
          <input type='file' id='file' required />
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default InvestorForm;
