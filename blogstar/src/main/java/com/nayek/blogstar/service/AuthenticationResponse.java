package com.nayek.blogstar.service;

import lombok.Data;

@Data
public class AuthenticationResponse {

	private String authenticationToken;
	private String username;

	public AuthenticationResponse() {

	}

	public AuthenticationResponse(String jwtToken, String username) {
		this.authenticationToken = jwtToken;
		this.username = username;
	}
}
