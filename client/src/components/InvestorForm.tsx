import React, { useState } from 'react';
import './InvestorForm.css';

const InvestorForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    phone: '',
    address: '',
    state: '',
    zip: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert('File is required');

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        data.append(key, value);
      }
    });
    data.append('file', file);
    try {
      const res = await fetch('http://localhost:3000/api/investors', {
        method: 'POST',
        body: data,
      });
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await res.json();
      console.log('Form submitted successfully:', result);
      alert('Form submitted successfully');
      setFormData({
        firstName: '',
        lastName: '',
        dob: '',
        phone: '',
        address: '',
        state: '',
        zip: '',
      });
      setFile(null);
    } catch (error) {
      console.error('Error sending data to API', error);
      alert('Form submission failed');
    }
  };
  return (
    <div className='investor-form-container'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='firstName'>First Name</label>
          <input
            name='firstName'
            id='firstName'
            required
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='lastName'>Last Name</label>
          <input
            name='lastName'
            id='lastName'
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='dob'>Date of Birth</label>
          <input
            type='date'
            name='dob'
            id='dob'
            required
            value={formData.dob}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='phone'>Phone Number</label>
          <input
            type='tel'
            name='phone'
            id='phone'
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='address'>Street Address</label>
          <input
            name='address'
            id='address'
            required
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='state'>State</label>
          <input
            name='state'
            id='state'
            required
            value={formData.state}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='zip'>ZIP Code</label>
          <input
            name='zip'
            id='zip'
            required
            value={formData.zip}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='file'>Upload File</label>
          <input
            type='file'
            id='file'
            required
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default InvestorForm;
