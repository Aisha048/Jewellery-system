//package com.example.jewellery.Jewellery.Repository;
//
//import org.apache.catalina.User;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.stereotype.Repository;
//
//import java.util.Optional;
//
//@Repository
//public interface UserRepo extends JpaRepository<User,Integer> {
//
//    @Query(value = "select * from users ur where ur.username = : username", nativeQuery = true)
//    Optional<User> findByUsername(String username);
//
//}
//
//
