package com.nayek.blogstar.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nayek.blogstar.dto.RegisterRequest;
import com.nayek.blogstar.model.User;
import com.nayek.blogstar.repository.UserRepository;

@Service
public class AuthService {
	
	@Autowired
	private UserRepository userRepository;
	
	public void signup(RegisterRequest registerRequest) {
	
		User user = new User();
		user.setUsername(registerRequest.getUsername());
		user.setPassword(registerRequest.getPassword());
		user.setEmail(registerRequest.getEmail());
		userRepository.save(user);
	}

}
