import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './OrderList.css';

const OrderTable = () => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = () => {
        axios.get('http://localhost:8080/api/orders')
            .then(response => {
                setOrders(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching orders:', error);
            });
    };

    const handleAddOrder = () => {
        navigate('/mainform');
    };

    const handleUpdateOrder = (id) => {
        navigate(`/order_update/${id}`);
    };

    const handleDeleteOrder = (id) => {
        axios.delete(`http://localhost:8080/api/orders/${id}`)
            .then(response => {
                setOrders(orders.filter(order => order.id !== id));
            })
            .catch(error => {
                console.error('Error deleting order:', error);
            });
    };

    return (
        <div className="order-table-container">
            <h2>Order List</h2>
            <button className="add-order" onClick={handleAddOrder}>Add Order</button>
            <table className="order-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Items</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.price}</td>
                            <td>{order.date}</td>
                            <td>{order.items}</td>
                            <td>{order.address}</td>
                            <td>{order.phoneNumber}</td>
                            <td>
                                <button onClick={() => handleUpdateOrder(order.id)}>Update</button>
                                <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderTable;
