package com.example.jewellery.Jewellery.Repository;




import com.example.jewellery.Jewellery.Model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
    // You can add custom query methods here if needed
}

