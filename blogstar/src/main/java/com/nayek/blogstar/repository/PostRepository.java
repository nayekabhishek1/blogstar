package com.nayek.blogstar.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nayek.blogstar.model.Post;

public interface PostRepository extends JpaRepository<Post,Long> {

}
