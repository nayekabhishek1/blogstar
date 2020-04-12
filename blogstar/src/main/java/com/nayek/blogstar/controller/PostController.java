package com.nayek.blogstar.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nayek.blogstar.dto.PostDto;
import com.nayek.blogstar.service.PostService;

@RestController
@RequestMapping("/api/post")
public class PostController {

	@Autowired
	private PostService postService;

	@SuppressWarnings("rawtypes")
	@PostMapping("/create")
	public ResponseEntity createPost(@RequestBody PostDto postDto) {
		postService.createPost(postDto);
		return new ResponseEntity(HttpStatus.OK);
	}

	@GetMapping("/all")
	public ResponseEntity<List<PostDto>> showAllPosts() {
		return new ResponseEntity<>(postService.showAllPosts(), HttpStatus.OK);
	}


	@GetMapping("/all/{id}")
	public ResponseEntity<PostDto> getSinglePost(@PathVariable @RequestBody Long id) {
		return new ResponseEntity<>(postService.getSinglePost(id), HttpStatus.OK);
	}

}
