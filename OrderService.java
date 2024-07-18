package com.example.jewellery.Jewellery.Service;

import com.example.jewellery.Jewellery.Model.Order;
import com.example.jewellery.Jewellery.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Optional<Order> getOrderById(int id) {
        return orderRepository.findById(id);
    }

    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    public Order updateOrder(int id, Order order) {
        if (orderRepository.existsById(id)) {
            order.setId(id); // Ensure the ID in the order object matches the path variable
            return orderRepository.save(order);
        }
        return null; // Handle not found case
    }

    public void deleteOrder(int id) {
        orderRepository.deleteById(id);
    }
}
