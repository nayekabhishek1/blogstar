package com.nayek.blogstar.service;

public class AuthenticationResponse {

	private String authenticationToken;
	private String username;

	public AuthenticationResponse() {

	}

	public AuthenticationResponse(String jwtToken, String username) {
		this.authenticationToken = jwtToken;
		this.username = username;
	}

	public String getAuthenticationToken() {
		return authenticationToken;
	}

	public void setAuthenticationToken(String authenticationToken) {
		this.authenticationToken = authenticationToken;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	
	
}
