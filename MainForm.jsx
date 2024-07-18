import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import './MainForm.css'; // Import your CSS file

const OrderForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    items: '',
    price: '',
    address: '',
    phoneNumber: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post('http://localhost:8080/api/orders', formData)
      .then(response => {
        console.log('Order submitted successfully:', response.data);
        navigate('/order'); 
        // Optionally, you can handle success response here
        // Reset form fields after successful submission
        setFormData({
          items: '',
          price: '',
          address: '',
          phoneNumber: '',
          date: '',
        });
      })
      .catch(error => {
        console.error('Error submitting order:', error);
        // Optionally, you can handle error response here
      });
  };

  return (
    <div className="form-container">
      <h2>Order Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="items">Items:</label>
          <input
            type="text"
            id="items"
            name="items"
            value={formData.items}
            onChange={handleChange}
            placeholder="Enter items"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter address"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Order Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Submit Order" />
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
