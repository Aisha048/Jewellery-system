import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './OrderUpdate.css';

const UpdateOrderForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [items, setItems] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/api/orders/${id}`)
        .then((response) => {
          const order = response.data;
          setPrice(order.price);
          setDate(order.date);
          setItems(order.items);
          setAddress(order.address);
          setPhoneNumber(order.phoneNumber);
        })
        .catch((error) => {
          console.error('Error fetching order details:', error);
          alert('Error fetching order details!');
        });
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedOrder = {
      price,
      date,
      items,
      address,
      phoneNumber,
    };

    if (id) {
      axios.put(`http://localhost:8080/api/orders/${id}`, updatedOrder)
        .then((response) => {
          console.log('Order updated successfully:', response.data);
          alert('Order updated successfully!');
          navigate('/order'); // Navigate to another page after successful update
        })
        .catch((error) => {
          console.error('Error updating order:', error);
          alert('Error updating order!');
        });
    } else {
      console.error('Creating new orders is not implemented in this example.');
      alert('Creating new orders is not implemented in this example.');
    }
  };

  const resetForm = () => {
    setPrice('');
    setDate('');
    setItems('');
    setAddress('');
    setPhoneNumber('');
  };

  return (
    <div className="order-form">
      <h1>{id ? 'Update Order' : 'Place Your Order'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="text" id="price" name="price" required value={price} onChange={(event) => setPrice(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" required value={date} onChange={(event) => setDate(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="items">Items:</label>
          <input type="text" id="items" name="items" required value={items} onChange={(event) => setItems(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" required value={address} onChange={(event) => setAddress(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="text" id="phoneNumber" name="phoneNumber" required value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
        </div>
        <button type="submit">{id ? 'Update Order' : 'Place Order'}</button>
      </form>
    </div>
  );
};

export default UpdateOrderForm;
