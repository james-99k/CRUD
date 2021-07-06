package com.example.CRUD.repository;

import com.example.CRUD.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TodoRepository extends JpaRepository<Todo, Long> {
    List<Todo> findByPublished(boolean published);
    List<Todo> findByTitleContaining(String title);
}
