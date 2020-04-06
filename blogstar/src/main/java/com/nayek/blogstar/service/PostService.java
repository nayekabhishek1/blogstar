package com.nayek.blogstar.service;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collector;

import org.hibernate.transform.ToListResultTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import static java.util.stream.Collectors.toList;
import com.nayek.blogstar.dto.PostDto;
import com.nayek.blogstar.exception.PostNotFoundException;
import com.nayek.blogstar.model.Post;
import com.nayek.blogstar.repository.PostRepository;

@Service
public class PostService {

	@Autowired
	private AuthService authService;

	@Autowired
	private PostRepository postRepository;

	public void createPost(PostDto postDto) {
		Post post = mapFromDtoToPost(postDto);
		postRepository.save(post);
	}

	public List<PostDto> showAllPosts() {
		// TODO Auto-generated method stub
		List<Post> posts = postRepository.findAll();
		return posts.stream().map(this::mapFromPostToDto).collect(toList());
	}

	public PostDto getSinglePost(Long id) {
		Post post = postRepository.findById(id).orElseThrow(() -> new PostNotFoundException("For id: " + id));
		return mapFromPostToDto(post);
	}

	private PostDto mapFromPostToDto(Post post) {
		PostDto postDto = new PostDto();
		postDto.setId(post.getId());
		postDto.setTitle(post.getTitle());
		postDto.setContent(post.getContent());
		postDto.setUsername(post.getUsername());
		return postDto;
	}

	private Post mapFromDtoToPost(PostDto postDto) {
		Post post = new Post();
		post.setTitle(postDto.getTitle());
		post.setContent(postDto.getContent());
		User username = authService.getCurrentUser()
				.orElseThrow(() -> new IllegalArgumentException("No user logged in"));
		post.setUsername(username.getUsername());
		post.setCreatedOn(Instant.now());
		return post;
	}

}
