//package com.example.jewellery.Jewellery.Controller;
//
//
//
//import com.example.jewellery.Jewellery.Model.Customer;
//import com.example.jewellery.Jewellery.Model.User;
//import com.example.jewellery.Jewellery.Service.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Optional;
//
//@RestController
//@RequestMapping("/api/v1/customers")
//@CrossOrigin(origins = "http://localhost:3000")
//public class CustomerApi {
//    @Autowired
//    private UserService userService;
//
//    @PostMapping
//    public User post(@RequestBody User user) {
//        return userService.post(user);
//    }
//
//    @GetMapping
//    public List<User> getAllCustomer() {
//        return userService.getUser();
//    }
//
//    @GetMapping("/{id}")
//    public Optional<Customer> getById(@PathVariable Integer id) {
//        return userService.getById(id);
//    }
//
//    @DeleteMapping("/{id}")
//    public void deleteById(@PathVariable Integer id) {
//        userService.deleteById(id);
//    }
//
//    @PutMapping("/{id}")
//    public ResponseEntity<User> updatUser(@PathVariable int id, @RequestBody User user) {
//        User updatedUser = userService.updateUser(id, user);
//        return ResponseEntity.ok(updatedUser);
//    }
//}
