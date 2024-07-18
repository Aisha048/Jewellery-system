//
//package com.example.jewellery.Jewellery.Service;
//
//import com.example.jewellery.Jewellery.Model.User;
//import com.example.jewellery.Jewellery.Repository.UserRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class UserService {
//    @Autowired
//    private UserRepo userRepo;
//
//    public User authentication(String username, String password){
//        Optional<User> login = userRepo.findByUsername(username);
//        if (login.isPresent()){
//            User user = login.get();
//            if (password.matches(user.getPassword())) {
//                return user;
//            }
//        }
//        return null;
//    }
//    public  User post (User user)
//    {
//        return userRepo.save(user);
//    }
//
//    public List<User> getUser() {
//        return userRepo.findAll();
//    }
//
//    public Optional<User> getById(Integer id) {
//        return userRepo.findById(id);
//    }
//
//    public void deleteById(Integer id) {
//        userRepo.deleteById(id);
//    }
//
//    public User updateUser(int id, User user) {
//        Optional<org.apache.catalina.User> existingUserOptional = userRepo.findById(id);
//
//        if (existingUserOptional.isPresent()) {
//            User existingUser = (User) existingUserOptional.get();
//            existingUser.setUsername(user.getUsername());
//            existingUser.setEmail(user.getEmail());
//            existingUser.setPassword(user.getPassword());
//
//            return userRepo.save(existingUser);
//        } else {
//            throw new RuntimeException("User not found with id: " + id);
//        }
//    }
//}
